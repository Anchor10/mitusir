<template>
    <div class="box">
        <HeaderCom :tit="title"/>
        <img :src="src" alt="">
        <div class="text">本人身高185<br>,体重185<br>,肌肉100斤<br>,求交往!!!
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1129713332&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1129713332:51" alt="跟我聊天吧!" title="跟我聊天吧!"/></a>
        </div>
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
    .text a img{
        width: 50px;
        vertical-align: -3px;
    }
</style>
