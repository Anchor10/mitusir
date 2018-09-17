<template>
    <div>
        <p class="title">{{tit}}</p>
    </div>
</template>
<script>
export default {
    name:'HeaderCom',
    props:
        ['tit'],
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
        position: fixed;
        top: 0;
        left: 0;
        height: 40px;
        line-height: 40px;
        background: #0ea1f6;
        width: 100%;
    font-size: 16px;
    color: #fff;
    box-shadow: 1px 0px 20px #ccc;
    }
</style>


