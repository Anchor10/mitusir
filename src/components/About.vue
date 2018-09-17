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
    name: 'About',
    data() {
        return {
            title:"about",
            src: './static/images/4.png'
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
