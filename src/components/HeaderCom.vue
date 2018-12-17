<template>
    <div>
        
        <p class="title">
            <span class="back" @click="back" v-if="backShow">&lt;</span>
            {{tit}}
        </p>
    </div>
</template>
<script>
export default {
    name:'HeaderCom',
    props:
        ['tit','backShow'],
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
        background: linear-gradient(to bottom right, #fff 10%,#0ea1f6);
        width: 100%;
        font-size: 16px;
        color: #fff;
        box-shadow: 1px 0px 10px #ccc;
        z-index: 99999;
    }
    .back{
        position: absolute;
        left: 10px;
        top: 0;
        height: 30px;
        width: 30px;
        font-size: 20px;
        line-height: 30px;
    }
</style>


