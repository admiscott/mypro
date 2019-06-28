<template>
    <div>
        <div class="lend2_1">
            <div class="lend2_1-1">
                <img src="./../../assets/bao.png" alt="">
                <p>企业贷_20190611_0101</p>
            </div>
            <div class="lend2_1-2">
                <div>
                    <span>10.5</span><span>%</span>
                    <p style="margin:0">原协议约定年化利率</p>
                </div>
                <div>
                    <span>182天</span>
                    <p style="margin:0">剩余期限</p>
                </div>
                <div>
                    <span>15,576.06 元</span>
                    <p>转让总价</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.lend2_1{
    padding: 10px 10px 2px 10px;
    background: #fff;
    margin-top:6px; 
}
.lend2_1-1{
    display: flex;
}
img{
    width: 20px;
    height: 20px;
}
.lend2_1-2{
    display: flex;
    justify-content: space-around;
}
.lend2_1-2>div{
    text-align: center;
}
.lend2_1-2>div:first-child>span:first-child{
    font-size: 40px;
    color: #ff6c00;
    margin: 10px 0;
    display: inline-block;
}
.lend2_1-2>div:first-child>span:nth-child(2){
    font-size: 20px;
    color: #ff6c00;
    margin: 10px 0;
    display: inline-block;
}
.lend2_1-2>div:nth-child(2)>span,.lend2_1-2>div:nth-child(3)>span{
    font-weight: bolder;
}
.lend2_1-2>div:nth-child(2),.lend2_1-2>div:nth-child(3){
    margin-top: 27px;
}
</style>
