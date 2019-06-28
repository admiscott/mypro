<template>

    <div>
        <img :src="focused?yesimg:noimg" class="logoimg">       
    </div>
</template>

<script>
export default {

    props:{
        focused:false,
        yesimg:{default:''},
        noimg:{default:''}       
    }
}
</script>

<style scoped>
.logoimg{
    width:30px;
    height: 30px;
}
</style>
