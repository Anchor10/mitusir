<template>
    <div>
        <div class="swiper-container" id="swiper-pic">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/dwh.jpg" alt="">
                        <p>国内无名小帅哥竟登上时代周刊</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/wx-dwh.jpg" alt="">
                        <p>是和好如初 还是就此放手</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/ykj.png" alt="">
                        <p>南京程序员杨某凌晨被送往医院</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/dwh.jpg" alt="">
                        <p>村头百岁老大爷为何健硕如牛</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/wx.jpg" alt="">
                        <p>村尾大妈的冰糖葫芦为何惨遭下毒</p>
                    </a>
                </div>
                
            </div>
            <div class="swiper-button-prev" id="prev"></div><!--左箭头-->
            <div class="swiper-button-next" id="next"></div><!--右箭头-->
            <div class="swiper-scrollbar" id="scrollbar"></div>
        </div>
    </div>
</template>
<script>
import Swiper from '../../static/js/swiper.min.js' 
export default {
    name:'SwiperPic',
    props:
        ['tit'],
    methods:{
        
    },
    mounted(){
        $(function(){
            var mySwiper = new Swiper('#swiper-pic', {
                speed:800,
                autoplay: {
                    delay:4000,
                    disableOnInteraction: false,
                },
                loop:false,
                navigation: {
                    nextEl: '#next',
                    prevEl: '#prev',
                },
                scrollbar: {
                    el: '#scrollbar',
                },
                observer:true,
                observeParents:true,
            })
        })
    }
}
</script>
<style scoped>
    @import '../../static/css/swiper.min.css';
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
    #swiper-pic .swiper-slide{
        position: relative;
    }
    #swiper-pic .swiper-slide img{
        width: 100%;
        height: 200px;
        display: block;
    }
    #swiper-pic .swiper-slide p{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        text-align: left;
        text-indent: 10px;
    }
    #swiper-pic #next{
        width: 30px;
        height: 30px;
        background: url(../../static/images/r-arrow.png) no-repeat;
        background-size: 30px 30px;
        border-radius: 5px;
        outline: none;
    }
    #swiper-pic #prev{
        width: 30px;
        height: 30px;
        background: url(../../static/images/l-arrow.png) no-repeat;
        background-size: 30px 30px;
        border-radius: 5px;
        outline: none;
    }
</style>


