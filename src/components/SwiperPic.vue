<template>
    <div>
        <div class="swiper-container" id="swiper-pic">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                    <a href="javascript:;">
                        <img v-lazy="item.imgSrc" alt="">
                        <p>{{item.imgTitle}}</p>
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
    data:function(){
        return {
            bannerList:[
            {
                imgSrc:'/static/images/dwh.jpg',
                imgTitle:"国内无名小帅哥竟登上时代周刊",
                aHref:"javascript:;"
            },
            {
                imgSrc:'/static/images/wx-dwh.jpg',
                imgTitle:"是和好如初 还是就此放手",
                aHref:"javascript:;"
            },
            {
                imgSrc:'/static/images/ykj.png',
                imgTitle:"南京程序员杨某凌晨被送往医院",
                aHref:"javascript:;"
            },
            {
                imgSrc:'/static/images/dwh.jpg',
                imgTitle:"村头百岁老大爷为何健硕如牛",
                aHref:"javascript:;"
            },
            {
                imgSrc:'/static/images/wx.jpg',
                imgTitle:"村尾大妈的冰糖葫芦为何惨遭下毒",
                aHref:"javascript:;"
            },
                     ]
        }
    },
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


