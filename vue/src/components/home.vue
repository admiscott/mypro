<template>
	<div>
		<!-- 主页板块一 -->
		<div class="index1">
			<!-- 轮播图 -->
			<div style="width:100%;height:218px">
				<mt-swipe :auto="1500">
  				<mt-swipe-item><img src="../assets/lun1.jpg" style="width:100%;height:218px"></mt-swipe-item>
  				<mt-swipe-item><img src="../assets/lun2.jpg" style="width:100%;height:218px"></mt-swipe-item>
  				<mt-swipe-item><img src="../assets/lun3.jpg" style="width:100%;height:218px"></mt-swipe-item>
				</mt-swipe>
			</div>
				
			<!-- 滚动新闻标题 -->
			<div></div>

			<!-- 滚动新闻标题下的链接链接 -->
			<div style="display:flex;justify-content:space-around;padding:0 20px">
				<div>
					<div class="img"></div>
					<p>新手礼包</p>
				</div>
				<div>
					<div class="img" style="background-position-x:-195px;"></div>
					<p>银行存管</p>
				</div>
				<div>
					<div class="img" style="background-position-x:-290px;"></div>
					<p>上市背景</p>
				</div>
			</div>
		</div>
		<!-- 主页板块二 -->
		<div class="index2">
			<div class='index2-1'>
				<h4>新手专区</h4>
				<span>限首次出借，限额3万</span>
			</div>
			<div class="index2-2">
				<p>协议约定年化利率</p>
				<p>12%</p>
			</div>
			<div class="index2-3">
				<div>
					<span>一个月</span>
					<br>
					<p>委托期限</p>
				</div>
				<div>
					<span>1,000.00</span>
					<br>
					<p>最低委托金额</p>
				</div>
			</div>
			<div>
				<mt-button size="large" class="but" @click="jie">委托出借</mt-button>
			</div>
		</div>
		<!-- 主页板块三 -->
		<div class="index3">
			<div class="index3-1">
				<div></div>
				<p>运营数据</p>
			</div>
			<div class="index3-2">
				<div></div>
				<p>合规进度</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{}
	},
	methods: {
		jie(){
			this.axios.get('/isLogin').then(result=>{
				// console.log(result)
				if(result.data.code==-1){
					this.$messagebox({
                        title:'请登录',
                        message:'您还未登录',
                        showConfirmButton:true,
                        }).then(action=>{
							if(action=confirm){
								this.$emit("isLogin1",'我的');
								// console.log('跳转到登录')
							}
						}	
						)
				}else{
					console.log("已在登录状态")
				}
			})
		}
	},
}
</script>

<style scoped>
.index1{
	background: #fff;
}
.index1 p{
	color: #534838;
    margin: 0;
    font-size: 12px;
}
.index2{
	background: #fff;
	margin-top:20px;
	padding: 10px 25px 25px 25px
}
.img{
	width: 50px;
	height: 50px;
	background-image: url(../assets/indeximg.png);
	background-size:cover;
	background-repeat: no-repeat;
	background-position-x: -100px;
}
.index2-1{
	display: flex;
	border-bottom: 1px solid #ececec;
	padding-bottom: 5px;
}
.index2-1>h4{
	color: #3961cd;
}
.index2-1>span{
	color: #999;
    font-size: 12px;
	font-weight: bolder;
	padding-top:6px;
	padding-left: 5px;
}
.index2-2{
	text-align: center;
	padding: 20px 0 10px 0;
}
.index2-2>p:last-child{
	font-size: 40px;
	color: #ff6c00;
}
.index2-3{
	display: flex;
	justify-content:space-around;
	padding: 10px 0 20px 0;
}
.index2-3>div{
	text-align: center;
}
.index2-3>div>span:first-child{
	font-size: 17px;
	font-weight: 700;
	color: #666
}
.but{
	background: #ff6c00;
	border-radius: 20px;
	color: #fff;
}
.index3{
	display: flex;
	justify-content:space-around;
}
.index3>div{
	width: 48%;
	text-align: center;
	background: #fff;
	border-radius: 10px;
	margin-top: 15px;
	padding: 20px 0 10px 0;
	margin-bottom:75px; 
}
.index3-1>div{
	margin: 0 auto;
	width: 30px;
	height: 30px;
	background-image: url(../assets/index3-1.png);
	background-repeat: no-repeat;
	background-size: 100%;
	margin-bottom: 6px;
}
.index3-2>div{
	margin: 0 auto;
	width: 30px;
	height: 30px;
	background-image: url(../assets/index3-2.png);
	background-repeat: no-repeat;
	background-size: 100%;
	margin-bottom: 6px;
}
</style>