<template>
    <div class="box">
        <HeaderCom :tit="title"/>
        <img :src="src" alt="">
        <NavCom></NavCom>
    </div>
</template>
<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
export default {
    name: 'List',
    data() {
        return {
            title:"列表",
            src: 'http://www.vrzhijia.com/d/file/ads/shouyeyizhougaofenyanxuan/2018-07-16/3a3611fce1b1d0a4b9f7c3eaa38e6c0e.jpg'
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
        width: 200px;
    }
    .box img{
        width: 200px;
    }
</style>
