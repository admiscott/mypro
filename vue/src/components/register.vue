<template>
    <div class="reg">
        <div class="reg1">
            <mt-header title="登录" class="mhead">
                <router-link to="/index" slot="left">
                    <mt-button icon="back" @click="ret">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="reg3">
            <div class="reg2">
            <div>
            </div>
            <div>
                <input type="text" placeholder="请设置账号(6-10位数字和字母)" @blur='n_blur' v-model='uname'>
                <div :class="nameclass==true?'yname':'nname'" v-show="namediv==true"></div>

                <input type="text" placeholder="请设置密码(6-10位数字和字母)" @blur='m_blur' v-model='upwd'>
                <div :class="upwdclass==true?'yupwd':'nupwd'" v-show="upwddiv==true"></div>

                <input type="text" placeholder="请输入手机号码" @blur='p_blur' v-model='phone'>
                <div :class="phoneclass==true?'yphone':'nphone'" v-show="phonediv==true"></div>
            </div>
            <div>
                <p style="margin:0">我有邀请人,添加推荐码帮助好友赚取收益</p>
                <img src="../assets/xuan.png" alt="" @click="goselect"><br>
            </div>
            <div v-show="select==true">
                <input type="text" placeholder="推荐码/推荐人手机号码(选填)">
            </div>
            <div>
                <input type="checkbox" v-model="isAgree" style="margin-right:8px;">
                <p>我已阅读并同意《亿钱贷注册协议》《风险及禁止性行为提示书》</p>
            </div>
            <div>
                <mt-button size="large" class="but" :disabled='isAgree==false' @click="goreg">注册</mt-button>
            </div>
            <div>
                已有账号,
                <span @click="gologin">去登陆</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        gologin:{default:Function},
        ret:{default:Function}
    },
    data(){
        return{
            select:true,
            uname:'',
            upwd:'',
            phone:'',
            nameclass:false,
            namediv:false,

            upwdclass:false,
            upwddiv:false,

            phoneclass:false,
            phonediv:false,

            select:false,
            isAgree:false,
            a:0
        }
    }
    ,
    methods:{
        goreg(){
            this.axios.get('/reg',{
                params:{
                    uname:this.uname,
                    upwd:this.upwd,
                    phone:this.phone
                    }
                }).then(result=>{
                    // console.log(result)
                    // console.log(result.data.code)
                    if(result.data.code==-1){
                        this.$messagebox({
                        title:'注册失败',
                        message:'用户名已被注册，请重试',
                        showConfirmButton:true,
                        })
                    }else{
                        this.$messagebox({
                        title:'注册成功',
                        message:'注册成功，快去登录吧！',
                        showConfirmButton:true,
                        }).then(action=>{
                            if(action=confirm){
                                console.log('跳转到登录')
                                this.$emit("loginShow",true);
                            }
                            })
                    }                          
                    })
        },
        n_blur(){
            var vername=/^[a-zA-Z0-9]{6,10}$/;
            if(!vername.test(this.uname)){
                this.namediv=true;
                this.nameclass=false;
            }else{
                this.namediv=true;
                this.nameclass=true;
            }
        },
        m_blur(){
            var verupwd=/^[a-zA-Z0-9]{6,10}$/;
            if(!verupwd.test(this.upwd)){
                this.upwddiv=true;
                this.upwdclass=false;
            }else{
                this.upwddiv=true;
                this.upwdclass=true;
            }
        },
        p_blur(){
            var verphone=/^1[3-8]\d{9}$/;
            if(!verphone.test(this.phone)){
                this.phonediv=true;
                this.phoneclass=false;
            }else{
                this.phonediv=true;
                this.phoneclass=true;
            }
        },
        goselect(){
            if(this.a%2==0){
                this.select=true;
            }else{
                this.select=false;
            } 
            this.a++;
        }
    }
}
</script>

<style scoped>
img{
    width: 50px;
    height: 32px;
        margin: 0 auto;
}
.reg{
    margin: 0 auto;
    background: #3961cd;
}

.mhead{
    background: #3961cd;
}
.reg3{
    display: flex;
    justify-content: space-around;
    background: #3961cd
}
/* =================================================== */
img{
    width: 16px;
    height: 16px;
    margin-left: 10px;
}
.but{
    background: #ff6c00;
    border-radius: 20px;
    color: #fff;
}
.reg2{
    background: #fff;
    padding: 20px 20px 0px 20px;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 85px;
}
.reg2>div:first-child{
    background-image: url(../assets/logo_reg.png);
    width: 73px;
    height: 73px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    margin-top: 25px;
}
.reg2>div:nth-child(2){
    margin-top: 10px;
}
.reg2>div:nth-child(2)>input,.reg2>div:nth-child(4)>input{
    border:none;
    border-bottom: 2px solid #ccc;
    padding-left: 28px;
    font-size: 15px;
    padding-right: 40px
}
.reg2>div:nth-child(2)>input:nth-child(1){
    background-image: url(../assets/wode.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;

}
.reg2>div:nth-child(3){
    display: flex
}
.reg2>div:nth-child(2)>input:nth-child(3){
    background-image: url(../assets/chujie.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;
}
.reg2>div:nth-child(2)>input:nth-child(5){
    background-image: url(../assets/xinpi.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;
}
.reg2>div:nth-child(4)>input{
    background-image: url(../assets/shouye.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;
}
.reg2>div:nth-child(5){
    display: flex
}
.reg2>div:nth-child(5)>p{
    font-size: 10px;
}
.reg2>div:nth-child(6){
    margin-top: 5px;
}
.reg2>div:last-child{
    text-align: right;
    margin-top: 15px;
    padding-bottom: 30px;
    font-size: 14px;
}
.reg2>div:last-child>span{
    color: #3961cd;
    font-size: 14px;
}
/* ------------------------------------------------------- */
.yname{
    width: 20px;
    height: 20px;
    background-image: url(../assets/yes.jpg);
    background-size: contain;
    position: absolute;
    top: 187px;
    left:300px;
}
.nname{
    width: 18px;
    height: 18px;
    background-image: url(../assets/no.jpg);
    background-size: contain;
    position: absolute;
    top: 187px;
    left:302px;
}
/* ------------------------------------------------------- */
.yupwd{
    width: 20px;
    height: 20px;
    background-image: url(../assets/yes.jpg);
    background-size: contain;
    position: absolute;
    top: 242px;
    left:300px;
}
.nupwd{
    width: 18px;
    height: 18px;
    background-image: url(../assets/no.jpg);
    background-size: contain;
    position: absolute;
    top: 242px;
    left:302px;
}
/* ------------------------------------------------------- */
.yphone{
    width: 20px;
    height: 20px;
    background-image: url(../assets/yes.jpg);
    background-size: contain;
    position: absolute;
    top: 297px;
    left:300px;
}
.nphone{
    width: 18px;
    height: 18px;
    background-image: url(../assets/no.jpg);
    background-size: contain;
    position: absolute;
    top: 297px;
    left:302px;
}
</style>
