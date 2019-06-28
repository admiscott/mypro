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
            <reg1 v-show="select==true" :regselect='myreg'></reg1>
            <reg2 v-show="select==false" :runreg='goreg' @loginShow="fn"></reg2>
        </div>
    </div>
</template>

<script>
import reg1 from './reg/reg1'
import reg2 from './reg/reg2'
export default {
    props:{
        ret:{default:Function}
    },
    components:{
        "reg1":reg1,
        "reg2":reg2
    },
    data(){
        return{
            select:true
        }
    }
    ,
    methods:{
        fn(){
            this.select=false;
            console.log(this.select)
        },
        myreg(){
            this.select=false;
        },
        goreg(){
            this.select=true;
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
}

.mhead{
    background: #3961cd;
}
.reg3{
    display: flex;
    justify-content: space-around;
    background: #3961cd
}
</style>
