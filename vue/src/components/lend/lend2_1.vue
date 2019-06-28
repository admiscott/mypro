<template>
    <div>
        <div class="lend2_1">
            <div class="lend2_1-1">
                <img src="./../../assets/wei.png" alt="">
                <p>微花贷_20190611_0101</p>
            </div>
            <div class="lend2_1-2">
                <div>
                    <span>8</span><span>%</span>
                    <p style="margin:0">一次还本付息</p>
                </div>
                <div>
                    <span>30</span><span>天</span>
                    <p style="margin:0">剩余可投361.00元</p>
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
    padding: 10px;
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
.lend2_1-2>div:last-child>span:first-child{
    font-size: 40px;
    color: #3961cd;
    margin: 10px 0;
    display: inline-block;
}
.lend2_1-2>div:last-child>span:nth-child(2){
    font-size: 20px;
    color: #3961cd;
    margin: 10px 0;
    display: inline-block;
}
</style>
