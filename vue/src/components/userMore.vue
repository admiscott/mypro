<template>
    <div>
        <div>
            <div class="user1">
                <div>
                    <p style='text-align:left' @click="more">返回</p>
                    <div></div>
                    <p style="padding:15px 0 20px 0">亿钱贷</p>
                </div>
                <div>
                    <mt-button size="large" class="but">退出登录</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        more(){
            this.$router.push('/user')
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
</style>
