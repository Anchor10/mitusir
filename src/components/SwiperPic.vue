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
                        <img src="/static/images/dwh.jpg" alt="">
                        <p>村头的大爷为何健硕如牛</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:;">
                        <img src="/static/images/wx.jpg" alt="">
                        <p>村尾大妈的冰糖葫芦为何惨遭下毒</p>
                    </a>
                </div>
                <div class="swiper-pagination" id="pag-pic"></div>
            </div>
            
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
            autoplay: false,//可选选项，自动滑动
            loop:true,
            pagination: {
                el: '#pag-pic',
                type : 'progressbar',
            },
            observer:true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
    #pag-pic{
        box-sizing: border-box;
        right: 0px;
        bottom: 6px;
        height: 30px !important;
        text-align: right;
        padding-right: 10px;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
    width: 15px !important;
    height: 10px !important;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    background: #ccc;
}
    /* #pag-pic .swiper-pagination-bullet-active {
    background: #000;
    width: 25px !important;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}
    #pag-pic .swiper-pagination {
    text-align: right;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    bottom: 12px;
    padding-right: 10px;
}
    #pag-pic .swiper-pagination-bullet {
    border-radius: 0px;
} */
</style>


