<template>
    <div>
        
        <p class="title">
            <span class="back" @click="back">&lt;</span>
            {{tit}}
        </p>
    </div>
</template>
<script>
export default {
    name:'HeaderCom',
    props:
        ['tit'],
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
        background: #fff;
        width: 100%;
    font-size: 16px;
    color: #2c3e50;
    box-shadow: 1px 0px 10px #ccc;
    }
    .back{
        position: absolute;
        left: 0;
        top: 0;
        height: 30px;
        width: 30px;
        font-size: 24px;
    }
</style>


