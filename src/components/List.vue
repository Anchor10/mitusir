<template>
    <div class="box">
        <HeaderCom :tit="title" :backShow="backShow"/>
        <div class="video-box">
            <ul class="con-list">
                    <li class="con-item" v-for="(item,index) in videoList" :key="index">
                        <h4>{{item.title}}</h4>
                        <video width="100%" :poster="item.poster" :src="item.videoSrc" controls>
                            您的浏览器不支持video标签
                        </video>
                    </li>
                </ul>
        </div>
        <NavCom></NavCom>
        <Totop/>
    </div>
</template>
<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
import Totop from "@/components/Totop";
export default {
    name: 'List',
    data() {
        return {
            title:"视频推荐",
            backShow:false,
            // 视频推荐
            videoList:[
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
                {
                    title:'神座--游戏视频',
                    poster:'/static/images/loading.gif',
                    videoSrc:'http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/df7420b35285890782905196910/SYHXJfty1qwA.mp4'
                },
            ],
        }
    },
    components :{
    NavCom,
    HeaderCom,
    Totop,
  }
}
</script>
<style scoped lang="less">
    .box{
        width: 100%;
        .video-box{
            padding: 5px;
            .con-list{
                .con-item{
                    margin-bottom: 5px;
                    padding: 5px;
                    background: #fff;
                    border-radius: 5px;
                }
            }
        }
    }
</style>
