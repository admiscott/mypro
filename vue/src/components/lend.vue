<template>
  <div>
		<!-- 顶部导航栏 -->
		<div class="lend1">
    		<div @click="test(0)" :class="select==0?'xz':''">易智投</div> 
    		<div @click="test(1)" :class="select==1?'xz':''">散标出租</div> 
    		<div @click="test(2)" :class="select==2?'xz':''">债权转让</div>
		</div>
		<!-- 面板 -->
		<mt-tab-container class="page-tabbar-tab-container" v-model="active">
			<mt-tab-container-item id="0">
				<lend1 @isLogin="fn"></lend1>
			</mt-tab-container-item>
			<mt-tab-container-item id="1">
				<lend2></lend2>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<lend3></lend3>
			</mt-tab-container-item>
		</mt-tab-container>
  </div>
</template>

<script>
import lend1 from "./lend/lend1"
import lend2 from "./lend/lend2"
import lend3 from "./lend/lend3"
export default {
  data(){
    return{
			active:'0',
			select:0
		}
	},
	methods:{
		fn(){
			console.log(1)
			this.$emit("isLogin2",'我的');
		},
		test(id){
		 	this.select=id;
		 	this.active=`${id}`
		}
	},
	components:{
		"lend1":lend1,
		"lend2":lend2,
		"lend3":lend3
	}
}
</script>

<style scoped>
.lend1{
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #ececec;
	background: #fff;
	padding:0 10px; 
	font-size: 16px;
}
.lend1>div{
	width: 80px;
	height: 60px;
	text-align: center;
	line-height: 65px;
}
.xz{
	border-bottom: 5px solid #3961cd;
  	color: #3961cd;
}
</style>
