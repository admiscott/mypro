<template>
    <div>
        <div class="user1">
            <div>
                <!-- <p style='text-align:right' @click="more">更多</p> -->
                <p style='text-align:right' @click="actionSheet">更多</p>
                <div></div>
                <p style="padding:15px 0 20px 0">{{name}}</p>
            </div>
        </div>
        <div class="user2">
            <div  style="display:flex;justify-content: space-around">
                <div style="display:flex">
                    <img src="../assets/chujie.png" alt="">
                    <div>
                        <p style="margin:0">易智投</p>
                        <p style="font-size: 10px;">自动分配 分散出借</p>
                    </div>
                </div>
                <div style="display:flex">
                    <img src="../assets/shouye.png" alt="">
                    <div>
                        <p style="margin:0">散装资产</p>
                        <p style="font-size: 10px;">轻松出借 安心之选</p>
                    </div>
                </div>
            </div>
            <div  style="display:flex;justify-content:space-around;margin-top:10px">
                <div style="display:flex;width:150px">
                    <img src="../assets/xinpi.png" alt="">
                    <div>
                        <p style="margin:0">我的回款</p>
                    </div>
                </div>
                <div style="display:flex;width:150px">
                    <img src="../assets/wode.png" alt="">
                    <div>
                        <p style="margin:0">交易流水</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="user3">
            <div style="display:flex;justify-content:space-around;">
                <div>
                    <img src="../assets/xinpi.png" alt="">
                    <p>任务中心</p>
                </div>
                <div>
                    <img src="../assets/xinpi.png" alt="">
                    <p>我的优惠卷</p>
                </div>
                <div>
                    <img src="../assets/xinpi.png" alt="">
                    <p>邀请有奖</p>
                </div>
            </div>
        </div>
        <div class="user4">
            <p style="margin-top:15px;">资金已由新网银行存管，安全更合规</p>
        </div>
        <mt-actionsheet :actions= "data" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>

<script>
export default {
    props:{
        name:''
    },
    data(){
        return {
            data:[
                {name:'设置',method:this.moneySet},
                {name:'退出登录',method:this.outUser}
            ],
            sheetVisible: false,
        }
    },
    methods: {
        
        actionSheet(){
            this.sheetVisible = true;
        },
        moneySet(){
            this.$router.push('/userMore')
        },
        outUser(){
            this.$messagebox({
                        title:'提示',
                        message:'你确认要退出嘛？',
                        showConfirmButton:true,
                        showCancelButton:true,
                        }).then(action=>{
                            if(action=confirm){
                                this.axios.get('/outlogon').then(result=>{
                                    console.log("登录session值已重置清空")
                                    this.$emit("out","首页")
                                })
                            }
                        })
        }
    },
}
</script>

<style scoped>
.user1>div:first-child{
    padding: 15px 15px 0 15px;
    background-color: #3961cd;
    text-align: center;
    
}
.user1>div:first-child>p{
    font-size: 16px;
    color: #fff;
}
.user1>div:first-child>div{
    background-image: url(./../assets/logo_reg.png);
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
.user2{
    background-color: #fff;
    padding:10px 0px 10px 0px;
}
.user2 img{
    width:46px;
    height:40px;
    border-right:2px solid #ccc;
    padding-right: 5px;
    margin-right: 5px;
}
.user2>div>div>div>p:first-child{
    font-size: 15px;
    font-weight: bold;
    color: #000;
}
.user3{
    background-color: #fff;
    margin-top: 10px;
    text-align: center;
    padding: 10px 0
}
.user3 p{
    color: #000;
    margin: 0
}
.user3 img{
    width: 50px;
    height: 50px;
}
.user4{
    text-align: center
}
</style>
