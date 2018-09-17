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
    name: 'Home',
    data() {
        return {
            title:"首页",
            src: 'http://www.vrzhijia.com/d/file/pingce/2017-09-20/947da2fe34bdc39c658013545c96ad6a.jpg'
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
