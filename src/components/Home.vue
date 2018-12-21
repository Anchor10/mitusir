<template>
    <div class="box">
        <HeaderCom :tit="title" :backShow="backShow"/>
        <SwiperPic />
        <div class="con-box">
            <div class="con-nav">
                <a href="javascript:;" class="cur">电影金句</a>
                <a href="javascript:;">视频推荐</a>
                <a href="javascript:;">照片大全</a>
            </div>
            <div class="con-lists">
                <ul class="con-list" style="display:block;">
                    <li class="con-item photo-pic" v-for="(item,index) in saying" :key="index">
                        <h4>{{item.title}}</h4>
                        <div class="photo-box">
                            <img v-lazy="item.imgSrc" alt="">
                            <div class="mask">
                                <p class="mov-copy">{{item.content}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="con-list" style="display:none;">
                    <li class="con-item" v-for="(item,index) in videoList" :key="index">
                        <h4>{{item.title}}</h4>
                        <video width="100%" :poster="item.poster" :src="item.videoSrc" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                </ul>
                <ul class="con-list photo-list" style="display:none;">
                    <li class="con-item photo-pic" v-for="(item,index) in photoList" :key="index">
                        <img v-lazy="item.imgSrc" alt="">
                    </li>
                </ul>
                
            </div>
        </div>
        <NavCom></NavCom>
    </div>
</template>
<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
import SwiperPic from "@/components/SwiperPic"
export default {
    name: 'Home',
    data() {
        return {
            title:"首页",
            backShow:false,
            // 电影金句
            saying:[
                {
                    title:"王牌特工",
                    imgSrc:'/static/images/bg.jpg',
                    content:'风光的背后不是沧桑,就是肮脏。'
                },
                {
                    title:"王牌特工",
                    imgSrc:'/static/images/wx-dwh.jpg',
                    content:'贪婪是最真实的贫穷,满足是最真实的财富。'
                },
                {
                    title:"王牌特工",
                    imgSrc:'/static/images/dwh.jpg',
                    content:'西服是现代绅士的盔甲。'
                },
                {
                    title:"王牌特工",
                    imgSrc:'/static/images/ykj.jpg',
                    content:'没有银汤匙的出身的确预设了你的人生轨迹，但你不必把自己困于其中，如果你准备好去适应并且学习，你就可以改变'
                },
                {
                    title:"王牌特工",
                    imgSrc:'/static/images/wx.jpg',
                    content:'不知礼，无以立也。'
                }
            ],
            // 视频推荐
            videoList:[
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/bg.jpg',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/bg.jpg',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/bg.jpg',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/bg.jpg',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
            ],
            // 照片大全
            photoList:[
                {
                    imgSrc:'/static/images/bg.jpg'
                },
                {
                    imgSrc:'/static/images/ykj.jpg'
                },
                {
                    imgSrc:'/static/images/dwh.jpg'
                },
                {
                    imgSrc:'/static/images/wx.jpg'
                },
                {
                    imgSrc:'/static/images/wx-dwh.jpg'
                },
                {
                    imgSrc:'/static/images/st93.png'
                },
                {
                    imgSrc:'https://www.topber.com/public/images/box.png'
                },
                {
                    imgSrc:'https://pic.zhuayoukong.com/d/file/game/2017-04-11/3d0e22247f98129a1040b2f452e2a5f7.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c543810fd3.jpg'
                },
                {
                    imgSrc:'https://www.topber.com/templates/default/Public/style/img/A2.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c52fd9e71e.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c53afdf705.png'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/20/5c1b3c1e9f41d.png'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c5518aad7b.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/20/5c1b52679c531.png'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c4e38c5df9.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/21/5c1c4c3b2f8ab.jpg'
                },
                {
                    imgSrc:'https://img.topber.com/upload/apk/2018/12/19/5c19e5a8a5aa0.jpg'
                },

            ]
        }
    },
    mounted:function(){
        $(function(){
            $(".con-nav").on("click","a",function(){
                $(this).addClass("cur").siblings().removeClass("cur");
                $(".con-list").eq($(this).index()).show().siblings(".con-list").hide();
            })
        })
    },
    components :{
    NavCom,
    HeaderCom,
    SwiperPic
  }
}
</script>
<style scoped>
    .box{
        width: 100%;
        
    }
    .box img{
        width: 60%;
        margin: 0 auto;
    }
    .text{
        text-align: center;
        font-size: 15px;
        color: red;
    }
    .text a img{
        width: 50px;
        vertical-align: -3px;
    }
    .pic{
        width: 200px;
        height: 350px;
    }
    .con-box{
        /* background: rgba(0, 0, 0, 0.3); */
        margin: 5px;
        border-radius: 10px;
        overflow: hidden;
    }
    .con-box .con-nav{
        display: flex;
        background: #aaa;
        border-radius: 5px;
        height: 30px;
        line-height: 30px;
    }
    .con-box .con-nav a{
        display: block;
        flex: 1;
        text-align: center;
        border-left: 1px solid #ccc;
        color: #fff;
    }
    .con-box .con-nav a:nth-of-type(1){
        border-left: 0;
    }
    .con-box .con-nav a.cur{
        background: #0ea1f6;
        box-shadow: 1px 1px 10px #000;
    }
    .con-lists{
        margin-top: 5px;
    }
    .con-list{
        overflow: hidden;
        width: 100%;
    }
    .con-list .con-item{
        background: #fff;
        padding: 5px;
        margin: 5px 0;
        border-radius: 5px;
    }
    .con-list .con-item h4{
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        color: #fff;
        background: #333;
    }
    .con-list .con-item.photo-pic img{
        display: block;
        width: 100%;
    }
    .con-list .con-item.photo-pic .photo-box{
        position: relative;
    }
    .con-list .con-item.photo-pic .mask{
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .con-list .con-item.photo-pic .mov-copy{
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        color: #fff;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 50px;
        line-height: 50px;
    }
    /* .photo-list{
        column-gap:10px;
        column-count: 2;
    } */
</style>
