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
                <input type="text" placeholder="请输入手机号码或者用户名" v-model='uname'>
                <input type="text" placeholder="请输入您的登陆密码" v-model='upwd'>
            </div>
            <div>
                <mt-button size="large" class="but" @click="log">登录</mt-button>
            </div>
            <div>
                <p @click="goreg">注册</p>
                <p>忘记密码</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goreg:{default:Function},
        ret:{default:Function}
    },
    data(){
        return{
            select:true,
            uname:'',
            upwd:'',
        }
    }
    ,
    methods:{
        log(){
            this.axios.get('/logon',{
                params:{
                    uname:this.uname,
                    upwd:this.upwd
                }
            }).then(result=>{
                if(result.data.code==-1){
                    this.$messagebox({
                        title:'登录失败',
                        message:'用户名或者密码错误，请重试',
                        })
                }else{
                    this.$messagebox({
                        title:'消息',
                        message:'成功登录！',
                        }).then(action=>{
                            // console.log(result.data.uid)
                            var uid=result.data.uid
                            if(action=confirm){
                                console.log('跳转到用户页面')
                                this.$emit("borrow",uid);
                            }
                        })
                }
            })
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
/* ============================================================= */
.but{
    background: #ff6c00;
    border-radius: 20px;
    color: #fff;
}
.reg2{
    background: #fff;
    padding: 20px;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 130px;
}
.reg2>div:first-child{
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
.reg2>div:nth-child(2){
    margin-top: 25px;
}
.reg2>div:nth-child(2)>input{
    border:none;
    border-bottom: 2px solid #ccc;
    padding-left: 28px;
    font-size: 15px;
}
.reg2>div:nth-child(2)>input:nth-child(1){
    background-image: url(./../assets/wode.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;

}
.reg2>div:nth-child(2)>input:nth-child(2){
    background-image: url(./../assets/chujie.png);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position: 0px 11px;
}
.reg2>div:nth-child(3){
    margin-top: 30px;
}
.reg2>div:nth-child(4){
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 20px;
}
.reg2>div:nth-child(4)>p{
    color: #3961cd;
    font-size: 14px;
}
</style>
