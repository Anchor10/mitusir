<template>
    <div class="box">
        <HeaderCom :tit="title"/>
        <SwiperPic />
        <div class="con-box">
            <div class="con-nav">
                <a href="javascript:;" class="cur">视频推荐</a>
                <a href="javascript:;">照片大全</a>
                <a href="javascript:;">电影金句</a>
            </div>
            <div class="con-lists">
                <ul class="con-list">
                    <li class="con-item">
                        <h4>神座-游戏视频</h4>
                        <video width="100%"  src="http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                    <li class="con-item">
                        <h4>神座-游戏视频</h4>
                        <video width="100%" src="http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/bb8571085285890781260476203/v.f30.mp4" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                    <li class="con-item">
                        <h4>神座-游戏视频</h4>
                        <video width="100%" src="http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/397d60c95285890781937100902/v.f30.mp4" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                    <li class="con-item">
                        <h4>神座-游戏视频</h4>
                        <video width="100%" src="http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                </ul>
                <ul class="con-list" style="display:none;">
                    <li class="con-item photo-pic">
                        <img src="../../static/images/ykj.jpg" alt="">
                    </li>
                    <li class="con-item photo-pic">
                        <img src="../../static/images/bg.jpg" alt="">
                    </li>
                    <li class="con-item photo-pic">
                        <img src="../../static/images/wx-dwh.jpg" alt="">
                    </li>
                    <li class="con-item photo-pic">
                        <img src="../../static/images/dwh.jpg" alt="">
                    </li>
                    <li class="con-item photo-pic">
                        <img src="../../static/images/wx.jpg" alt="">
                    </li>
                    <li class="con-item photo-pic">
                        <img src="../../static/images/st93.png" alt="">
                    </li>
                </ul>
                <ul class="con-list" style="display:none;">
                    <li class="con-item photo-pic">
                        <h4>王牌特工</h4>
                        <div class="photo-box">
                            <img src="../../static/images/bg.jpg" alt="">
                            <div class="mask">
                                <p class="mov-copy">风光的背后不是沧桑,就是肮脏。</p>
                            </div>
                        </div>
                    </li>
                    <li class="con-item photo-pic">
                        <h4>王牌特工</h4>
                        <div class="photo-box">
                            <img src="../../static/images/wx-dwh.jpg" alt="">
                            <div class="mask">
                                 <p class="mov-copy">贪婪是最真实的贫穷,满足是最真实的财富。</p>
                            </div>
                        </div>
                    </li>
                    <li class="con-item photo-pic">
                        <h4>王牌特工</h4>
                        <div class="photo-box">
                            <img src="../../static/images/dwh.jpg" alt="">
                            <div class="mask">
                                <p class="mov-copy">西服是现代绅士的盔甲。</p>
                            </div>
                        </div>
                    </li>
                    <li class="con-item photo-pic">
                        <h4>王牌特工</h4>
                        <div class="photo-box">
                            <img src="../../static/images/ykj.jpg" alt="">
                            <div class="mask">
                                <p class="mov-copy">没有银汤匙的出身的确预设了你的人生轨迹，但你不必把自己困于其中，如果你准备好去适应并且学习，你就可以改变</p>
                            </div>
                        </div>
                    </li>
                    <li class="con-item photo-pic">
                        <h4>王牌特工</h4>
                        <div class="photo-box">
                            <img src="../../static/images/wx.jpg" alt="">
                            <div class="mask">
                                <p class="mov-copy">不知礼，无以立也。</p>
                            </div>
                        </div>
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
            src: '/static/images/wenhui.jpg' 
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

    }
</style>
