<template>
    <div class="box">
        <HeaderCom :tit="title" :backShow="backShow"/>
        <img :src="src" alt="">
        <NavCom></NavCom>
        <Totop/>
    </div>
</template>
<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
import Totop from "@/components/Totop";
export default {
    name: 'List',
    data() {
        return {
            title:"文摘",
            backShow:false,
            src: 'http://www.vrzhijia.com/d/file/ads/shouyeyizhougaofenyanxuan/2018-07-16/3a3611fce1b1d0a4b9f7c3eaa38e6c0e.jpg'
        }
    },
    components :{
    NavCom,
    HeaderCom,
    Totop,
  }
}
</script>
<style scoped>
    .box{
        width: 200px;
    }
    .box img{
        width: 200px;
    }
</style>
