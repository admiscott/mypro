<template>
    <div>
        <div class="lend1">
            <div class="lend1-1">
                <div>福利新手专享</div>
                <p>限首次出借，限额3万</p>
            </div>
            <div class="lend1-2">
                <div>
                    <p>12%</p>
                    <p>协议约定年化利率</p>
                </div>
                <div>
                    <p>1个月</p>
                    <p>委托期限</p>
                </div>
            </div>
            <div class="lend1-3">
                <p>剩余可委托金额(元)：970,000.00</p>
            </div>
            <div style="background:#efeff4;height:6px;"></div>
            <div class="lend1-4">
                <p>委托金额：</p>
                <div>
                    <div style="display: flex;width:90%">
                        <p>￥</p>
                        <input type="text" v-model="money" placeholder="最低委托金额1000元">
                    </div>
                    <p style="color:#3961cd;font-weight: bold;line-height: 40px">全投</p>
                </div>
                <div>
                    <p style="padding:20px 0;margin:0">预期收益(元)：{{money*0.01}}</p>
                </div>
            </div>
            <div style="background:#efeff4;height:6px;"></div>
            <div class="lend1-5">
                <mt-button size="large" class="but1" @click="jie">立即委托</mt-button>
                <mt-button size="large" class="but2" @click="jie">查看详情</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            money:''
        }
    },
    methods:{
        jie(){
			this.axios.get('/isLogin').then(result=>{
				// console.log(result.data.code)
				if(result.data.code==-1){
					this.$messagebox({
                        title:'请登录',
                        message:'您还未登录',
                        showConfirmButton:true,
                        }).then(action=>{
							if(action=confirm){
                                console.log('跳转到登录')
                                this.$emit("isLogin");
							}
						}	
						)
				}else{
                    console.log("已在登录状态")
                }
			})
		}
    }
}
</script>

<style scoped>
.lend1{
    background: #fff
}
.lend1-1{
    text-align: center;
    padding-top: 30px;
}
.lend1-1>div{
    border: 2px solid #ff6c00;
    border-radius:20px;
    background-color: #fff;
    color: #ff6c00;
    padding: 6px 0;
    width: 135px;
    margin:0 auto;
    margin-bottom: 10px;
}
.lend1-1>p{
    color: #555;
}
.lend1-2{
    display: flex;
    text-align: center;
    justify-content:space-around;
}
.lend1-2>div:first-child>p:first-child{
    font-size: 40px;
    color: #ff6c00;
    margin:35px 0 25px 0;

}
.lend1-2>div:last-child>p:first-child{
    font-size: 18px;
    color: #555;
    font-weight: bold;
    margin:35px 0 25px 0;
}
.lend1-3{
    box-shadow: inset 0 5px 9px 2px rgba(95,154,255,.05);
}
.lend1-3>p{
    line-height: 0px;
    padding: 25px 18px;
    color: #666;
    margin:0;
}
.lend1-4{
    padding: 20px 20px 0 20px;
}
.lend1-4>div{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
}
.lend1-4 input{
    width: 60%;
    font-size: 40px;
    border: 2px solid #efeff8;
}
.lend1-4 input::-webkit-input-placeholder{
    font-size: 10px;
    position:relative;
    bottom:10px;   
}
.lend1-4 input:focus{
    border: #f2cb80 2px solid;

}
.lend1-4>div>div>p{
    font-size: 40px;
    line-height: 42px;
    color: #000;
}
.lend1-5>.but1{
    background: #ff6c00;
    color: #fff;
    margin-bottom: 6px;
}
.lend1-5>.but2{
    background:rgb(57, 97, 205);
    color: #fff;
    margin-bottom: 6px;
}
</style>
