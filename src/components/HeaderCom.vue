<template>
    <div>
        
        <p class="title">
            <span class="back" @click="back" v-if="backShow">&lt;</span>
            <span class="logo" v-else>{{tit}}</span>
            <router-link class="search" :to="'/search'"></router-link>
            <router-link class="userImg" :to="'/user'"><img :src="userImg" alt=""></router-link>
        </p>
    </div>
</template>
<script>
export default {
    name:'HeaderCom',
    data(){
        return {
            userImg:"/static/images/dwh.jpg"
        }
    },
    props:
        ['backShow','tit'],
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    .title{
        max-width: 650px;
        position: fixed;
        top: 0;
        /* left: 0; */
        height: 30px;
        line-height: 30px;
        background: linear-gradient(#0ea1f6,#fff,#0ea1f6);
        width: 100%;
        font-size: 16px;
        color: #fff;
        box-shadow: 1px 0px 10px #ccc;
        z-index: 99999;
    }
    .back{
        position: absolute;
        left: 10px;
        top: 5px;
        height: 20px;
        width: 20px;
        color: #0ea1f6;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        border: 1px solid #fff;
        border-radius: 10px;
        background: #fff;
    }
    .logo{
        position: absolute;
        left: 10px;
        top: 5px;
        height: 20px;
        color: #0ea1f6;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        border-radius: 3px;
        padding: 0 10px;
        box-shadow: 1px 1px 10px #fff;
    }
    .userImg{
        display: block;
        position: absolute;
        right: 2px;
        top: 2px;
        height: 25px;
        width: 25px;
        font-size: 20px;
        line-height: 30px;
        border-radius: 50%;
        border: 1px solid #fff;
        overflow: hidden;
    }
    .userImg img{
        width: 100%;
        height: 100%;
        display: block;
        
    }
    .search{
        display: block;
        position: absolute;
        right: 35px;
        top: 4px;
        height: 22px;
        width: 50%;
        font-size: 22px;
        background: url(/static/images/searchBtn.png)no-repeat right center #fff;
        background-size: 28px 28px;
        border-radius: 3px;
    }
</style>


