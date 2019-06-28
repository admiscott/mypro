<template>
    <div>
        <div class="letter">
            <div>
                信息披露
            </div>
            <div>
                <div>
                    <img src="./../assets/01.png" alt="">
                    <p>合规进程</p>
                </div>
                <div>
                    <img src="./../assets/02.png" alt="">
                    <p>公司简介</p>
                </div>
                <div>
                    <img src="./../assets/03.png" alt="">
                    <p>平台信息</p>
                </div>
                <div>
                    <img src="./../assets/04.png" alt="">
                    <p>组织架构</p>
                </div>
            </div>                
            <div>
                <div>
                    <img src="./../assets/05.png" alt="">
                    <p>管理团队</p>
                </div>
                <div>
                    <img src="./../assets/06.png" alt="">
                    <p>运营数据</p>
                </div>
                <div>
                    <img src="./../assets/07.png" alt="">
                    <p>运营报告</p>
                </div>
                <div>
                    <img src="./../assets/08.png" alt="">
                    <p>审核信息</p>
                </div>
            </div>                
            <div>
                <div>
                    <img src="./../assets/09.png" alt="">
                    <p>重大事项</p>
                </div>
                <div>
                    <img src="./../assets/10.png" alt="">
                    <p>资费说明</p>
                </div>
                <div>
                    <img src="./../assets/11.png" alt="">
                    <p>风险控制</p>
                </div>
                <div>
                    <img src="./../assets/12.png" alt="">
                    <p>银行存管</p>
                </div>
                
            </div>
        </div>                
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>

<style scoped>
.letter{
    background: #fff;
    padding-bottom: 300px;
}
.letter>div:nth-child(1){
    text-align: center;
    	border-bottom: 1px solid #ececec;
        padding: 14px;
}
.letter>div:nth-child(2),.letter>div:nth-child(3),.letter>div:nth-child(4){
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top:25px;
    padding: 0 15px;
}
img{
    width: 45px;
    height: 45px;
}
</style>
