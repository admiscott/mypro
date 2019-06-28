//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");

//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"money",
  connectionLimit:15
})
//3:创建express对象
var server = express();
//9:绑定监听端口
server.listen(3000);
//5:处理跨域请求
const cors=require("cors");
server.use(cors({
    origin:["http://localhost:3001","http://127.0.0.1:3001"],
    credentials:true
}));
//6:添加session功能
const session=require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))

// 注册接口
server.get('/reg',(req,res)=>{
    var uname = req.query.uname;
    var sql='SELECT * FROM user WHERE uname=?';
    pool.query(sql,[uname],(err,result)=>{
      if(err)throw err;
      if(!result.length==0){
          res.send({code:-1,msg:"账号已被注册"});
      }else{
        var sql='INSERT INTO user SET ?'
        pool.query(sql,[req.query],(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){
              res.send({code:1,msg:'注册成功'});
            }else{
              res.send({code:-1,msg:'注册失败'});
            }
          });

      }
  })

})

// 登录
// server.get('/logon',(req,res)=>{
//     var uname = req.query.uname;
//     var upwd = req.query.upwd;
//     var sql='SELECT uid FROM user WHERE uname=? AND upwd=?';
//     pool.query(sql,[uname,upwd],(err,result)=>{
//         if(err)throw err;
//         if(result.length>0){
//           var idkey=req.session.uid = result[0].uid
//             res.send({code:1,msg:"登录成功",uid:idkey}); 
//         }else{
//             res.send({code:-1,msg:"用户名或密码有误"});
//         }
//     })
// })

server.get('/logon',(req,res)=>{
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql='SELECT uid,uname FROM user WHERE uname=? AND upwd=?';
  pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        console.log(result)
      req.session.uid = result[0].uid
          res.send({code:1,msg:"登录成功",uid:result});
      }else{
          res.send({code:-1,msg:"用户名或密码有误"});
      }
  })
})

// 用户是否登录
server.get("/isLogin",(req,res)=>{
  if(req.session.uid!=undefined){
    res.send({uid:req.session.uid,msg:"用户已登录"})
  }else{
    res.send({code:-1,meg:"用户未登录"})
  }
})

// 获取所有数据
// server.get('/user',(req,res)=>{
//   pool.query('SELECT uid,uname FROM user',[],(err,result)=>{
//     if(err){console.log(err)}
//     res.send(result);
// })
// })

// 清除登录状态
server.get('/outlogon',(req,res)=>{
  pool.query('SELECT uid FROM user',[],(err,result)=>{
      if(err){
          console.log(err)
        }else{
          req.session.uid=undefined
          res.send(result);
      }   
  })
})


