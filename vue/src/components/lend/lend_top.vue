<template>
    <div>
        <div>
            <div class="lend2">
                <button style="padding-left:25px;" @click="test1">
                    <span :class="select==0?'xz':''">默认排序</span>
                </button>
                <button style="padding-left:20px;" @click="test2">
                    <span :class="select==1?'xz':''">期限排序</span>
                    <span class="spanup" :class="this.lock_a==true?'xzuspan':''"></span>
                    <span class="spandown" :class="this.lock_a==false?'xzdspan':''"></span>
                </button>
                <button class="xz" @click="test3">
                    <span :class="select==2?'xz':''">利率排序</span>
                    <span class="spanup" :class="this.lock_b==true?'xzuspan':''"></span>
                    <span class="spandown" :class="this.lock_b==false?'xzdspan':''"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            select:0,
            lock_a:'true',
            lock_b:'true',
            a:0,
            b:0
        }
    },
    methods:{
        test1(){
            this.select=0;
            this.lock_a='true'
            this.lock_b='true'
            console.log(this.lock_a)
        },
        test2(){
            this.select=1;
            if(this.a%2==0){
                this.lock_a=true;
            }else{
                this.lock_a=false;
            } 
            this.a++;
            this.lock_b='true'
            console.log(this.lock_a)
        },
        test3(){
            this.select=2;
            if(this.b%2==0){
                this.lock_b=true;
            }else{
                this.lock_b=false;
            } 
            this.b++;
            this.lock_a='true'
            console.log(this.lock_b)
        }
    }
    
}
</script>

<style scoped>
.lend2{
    background: #fff;
}
.lend2>button{
    border: none;
    color: #444;
}
.spanup{
    width:0;
    height:0;
    border-width:0 6px 6px;
    border-style:solid;
    border-color:transparent transparent #999;/*透明 透明  灰*/
    position:relative;
    left: 5px;
    top: -11pt;
}
.spandown{
    width:0;
    height:0;
    border-width:6px 6px 0;
    border-style:solid;
    border-color:#999 transparent transparent;/*灰 透明 透明 */
    position:relative;
    left: -7px;
    top: 12pt;
}
.xz {
    color: #3961cd;
    margin: 0;
}
.xzuspan{
    border-color:transparent transparent #3961cd;
}
.xzdspan{
    border-color:#3961cd transparent transparent;
}
</style>
