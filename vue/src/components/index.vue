<template>
  <div>
		<!-- 面板 -->
		<mt-tab-container class="page-tabbar-container" v-model="active">
			<mt-tab-container-item id="首页">
				<home @isLogin1="fn1"></home>
			</mt-tab-container-item>
			<mt-tab-container-item id="出借">
				<lend @isLogin2="fn2"></lend>
			</mt-tab-container-item>
			<mt-tab-container-item id="信披">
				<letter></letter>
			</mt-tab-container-item>
			<mt-tab-container-item id="我的">
				<login :ret="back" v-show="isSelect==1"
				:goreg='isGoreg'
				@borrow="goborrow"
				></login>
				<register :ret="back" v-show="isSelect==2"
				:gologin='isGologin'
				@loginShow='isGologin'
				></register>
				<user v-show="isSelect==3" @out="isOut" :name='idname'></user>
				<!-- <reg :ret="back"></reg> -->
			</mt-tab-container-item>
		</mt-tab-container>

		<!-- 底部导航栏 -->
		<mt-tabbar v-model="active" fixed>
			<mt-tab-item id="首页" @click.native="opt(0)">
				<footlog
				:yesimg='require("../assets/ic_shouye.png")'
				:noimg="require('../assets/shouye.png')"
				:focused="select[0].isSelect"
				></footlog>
				首页
			</mt-tab-item>
			<mt-tab-item id="出借" @click.native="opt(1)">
				<footlog
				:yesimg='require("../assets/ic_chujie.png")'
				:noimg="require('../assets/chujie.png')"
				:focused="select[1].isSelect"
				></footlog>
				出借
			</mt-tab-item>
			<mt-tab-item id="信披" @click.native="opt(2)">
				<footlog
				:yesimg='require("../assets/ic_xinpi.png")'
				:noimg="require('../assets/xinpi.png')"
				:focused="select[2].isSelect"
				></footlog>
				信披
			</mt-tab-item>
			<mt-tab-item id="我的"  @click.native="opt(3)">
				<footlog
				:yesimg='require("../assets/ic_wode.png")'
				:noimg="require('../assets/wode.png')"
				:focused="select[3].isSelect"
				></footlog>
				我的
			</mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>
// import reg from "./reg"
import login from "./login"
import register from "./register"
import user from "./user"
import footlog from "./footlog"
import lend from "./lend"
import home from "./home"
import letter from "./letter"
export default {
  data(){
    return{
			// 控制面板
			active:'首页',
			// 底部导航栏
			select:[
				{isSelect:true},
				{isSelect:false},
				{isSelect:false},
				{isSelect:false},
			],
			isSelect:1,
			idname:''
		}
  },
  components:{
	  "home":home,
	  "lend":lend,
	  "footlog":footlog,
	  'letter':letter,
	  "login":login,
	  "register":register,
	  "user":user,
	//   'reg':reg,
  },
  methods:{
	  isOut(data){
		  this.active=data;
		  this.isSelect=1
		  this.select[3].isSelect=false;
		  this.select[0].isSelect=true;
	  },
	  fn1(data){ 
		  this.active=data;
		  this.isSelect=1
		  this.select[0].isSelect=false;
		  this.select[3].isSelect=true;

	  },
	  fn2(data){
		  this.active=data;
		  this.isSelect=1
		  this.select[1].isSelect=false;
		  this.select[3].isSelect=true;

	  },
	  isGoreg(){
		  this.isSelect=2
	  },
	  isGologin(){
		  this.isSelect=1
	  },
	  goborrow(data){
		  console.log(`当前登录用户用户名为${data[0].uname}`)
		  this.active="我的"
		  this.isSelect=3
		  this.idname=data[0].uname
		  
	  },
	  opt(n){
		for(var i=0;i<this.select.length;i++){
            if(n==i){
                this.select[i].isSelect=true;
            }else{
                this.select[i].isSelect=false;
            }
		}
		if(n==3){
			this.axios.get('/isLogin').then(result=>{
				if(result.data.msg=='用户已登录'){
					// this.$router.push("/user")
					this.isSelect=3
				}else{
					this.isSelect=1
				}
				})
		}
	  },
	  back(){
		  this.active="首页"
		  this.select[0].isSelect=true;
		  this.select[3].isSelect=false;
	  },
  }
}
</script>

<style scoped>

.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#000;
}
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
</style>
