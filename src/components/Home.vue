<template>
    <div class="box">
        <HeaderCom :tit="title"/>
        <img :src="src" alt="">
        <div class="text">本人身高185<br>,体重185<br>,肌肉100斤<br>,求交往!!!</div>
        <NavCom></NavCom>
    </div>
</template>
<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
export default {
    name: 'Home',
    data() {
        return {
            title:"不爱编程的兔子",
            src: '/static/images/wenhui.jpg' 
        }
    },
    components :{
    NavCom,
    HeaderCom
  }
}
</script>
<style scoped>
    .box{
        width: 100%;
    }
    .box img{
        width: 60%;
        margin: 0 auto;
    }
    .text{
        text-align: center;
        font-size: 15px;
        color: red;
    }
</style>
