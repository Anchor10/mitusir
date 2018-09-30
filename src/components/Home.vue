<template>
    <div class="box">
        <HeaderCom :tit="title"/>
        <div class="box1">
        <div class="yue">觅兔</div>
        <div class="yun1"></div>
        <div class="yun2"></div>
        <div class="star1"></div>
        <div class="star2"></div>
        <div class="star3"></div>
        <div class="star4"></div>
        <div class="star5"></div>
        <div class="title">祈愿一辈子平安幸福!❥</div>
    </div>
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
        width: 100%;
    }
    .box img{
        width: 200px;
    }
    .box1{
    width: 100%;
    height: 200px;
    /* border: 1px solid skyblue; */
    margin: 0 auto;
    background: url(../../static/images/bg.jpg) no-repeat;
    background-size: 100% 300px;
    position: relative;
    overflow: hidden;
}
.star1 {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 300px;
    top: -20px;
    background: url(http://www.25az.cc/style/pc/images/xx.png) 0 0 no-repeat;
    animation: star 3s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
}
.star2 {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 450px;
    top: -20px;
    background: url(http://www.25az.cc/style/pc/images/xx2.png) 0 0 no-repeat;
    animation: star 3s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
}
.star3 {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 350px;
    top: -20px;
    background: url(http://www.25az.cc/style/pc/images/xx3.png) 0 0 no-repeat;
    animation: star 3s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
}
.star4 {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 600px;
    top: -20px;
    background: url(http://www.25az.cc/style/pc/images/xx4.png) 0 0 no-repeat;
    animation: star 3s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
}
.star5 {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 250px;
    top: -20px;
    background: url(http://www.25az.cc/style/pc/images/xx5.png) 0 0 no-repeat;
    animation: star 3s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
}
.star1 {
    animation-delay: -2.5s
}

.star2 {
    animation-delay: -4s
}

.star3 {
    animation-delay: -2s
}

.star4 {
    animation-delay: -3.5s
}

.star5 {
    animation-delay: -1.5s
}
.yue{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(orange,#fff);
    position: absolute;
    opacity: 0.8;
    left: 20px;
    top: 20px;
    text-align: center;
    line-height: 50px;
    color: red;
}
.yun1{
    width: 100px;
    height: 50px;
    background: url(../../static/images/yun.png) no-repeat;
    background-size: 100px;
    position: absolute;
    left: 20px;
    top: 50px;
}
.yun2{
    width: 150px;
    height: 70px;
    background: url(../../static/images/yun.png) no-repeat;
    background-size: 150px;
    position: absolute;
    left:20px;
    top: 50px;
    opacity: 0.5;
}
.title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 20px;
    color:#fff;
    opacity: 0.5;
    animation: textMove 3s linear infinite;
}
@keyframes textMove {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    80%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
@keyframes star {
    0% {
        opacity: 1;
        transform: translate3d(50%, -50%, 0)
    }
    50% {
        opacity: 0;
        transform: translate3d(-50%, 50%, 0)
    }
    100% {
        opacity: 0;
        transform: translate3d(-50%, 50%, 0)
    }
}
</style>
