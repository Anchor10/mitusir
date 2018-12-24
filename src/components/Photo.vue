<template>
    <div>
        <HeaderCom :tit="title" :backShow="backShow"/>
        <div class="zq-waterfall">
            <div class="zq-waterfall-left">
                <div class="box" v-for="(item,index) in itemsA" :key="index">
                    <div class="pic">
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
            <div class="zq-waterfall-right">
                <div class="box" v-for="(item,index) in itemsB" :key="index">
                    <div class="pic">
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
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
        name:'Photo',
        data () {
            return {
                title:'照片墙',
                backShow:false,
                items: [
                    {
                    img:'/static/images/bg.jpg'
                },
                {
                    img:'/static/images/ykj.jpg'
                },
                {
                    img:'/static/images/dwh.jpg'
                },
                {
                    img:'/static/images/wx.jpg'
                },
                {
                    img:'/static/images/wx-dwh.jpg'
                },
                {
                    img:'/static/images/st93.png'
                },
                {
                    img:'https://www.topber.com/public/images/box.png'
                },
                {
                    img:'https://pic.zhuayoukong.com/d/file/game/2017-04-11/3d0e22247f98129a1040b2f452e2a5f7.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c543810fd3.jpg'
                },
                {
                    img:'https://www.topber.com/templates/default/Public/style/img/A2.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c52fd9e71e.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c53afdf705.png'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/20/5c1b3c1e9f41d.png'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c5518aad7b.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/20/5c1b52679c531.png'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c4e38c5df9.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/21/5c1c4c3b2f8ab.jpg'
                },
                {
                    img:'https://img.topber.com/upload/apk/2018/12/19/5c19e5a8a5aa0.jpg'
                },

                ],
                itemsA:[],
                itemsB:[]
            }
        },
        computed: {},
        mounted: function () {
            this.getData()
        },
        methods: {
            // 方法
            getImg(url, callback){
                var img = new Image();
                img.src = url;
                //如果图片被缓存，则直接返回缓存数据
                if(img.compltet){
                    /* callback(img.width, img.height); */
                    callback(img.width, img.height, Number(img.height)/Number(img.width));
                }else{
                    //完全加载完毕的事件
                    img.onload = function(){
                        /* callback(img.width, img.height); */
                        callback(img.width, img.height, Number(img.height)/Number(img.width));
                    }
                }
            },
            getData(){
                // 加载完页面执行的函数
                let boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                let boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                let that = this;
                
                for(let val of this.items){
                    
                    that.getImg(val.img,function (w,h,r) {
                        // console.log(w)
                        boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                        boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                        console.log(boxA,boxB)
                        if(boxA>boxB){
                            that.itemsB.push(val)
                        }else{
                            that.itemsA.push(val)
                        }
                    })
                }
            }
        },
        components: {
            HeaderCom,
            NavCom,
            Totop,
        }
    }
</script>
<style scoped lang="less">
    .zq-waterfall{
        box-sizing: border-box;
        // padding: 0 5px;
        .box{
            margin-bottom: 5px;
            position: relative;
            }
        .pic{
            padding: 5px;
            background: #fff;
            border-radius: 5px;
            margin-bottom: 5px;
        }
        .box img{
                width: 100%;
                display: block;
            }
            img {    
                transform: scale(1);          /*图片原始大小1倍*/
                transition: all ease 0.5s; }  /*图片放大所用时间*/


                img.active {     
                transform: scale(3);          /*图片需要放大3倍*/
                position: absolute;           /*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
                z-index: 100; }  
        .zq-waterfall-left{
            box-sizing: border-box;
            float: left;
            width: 48%;
            margin: 10px 1% 5px;
        }
        .zq-waterfall-right{
            box-sizing: border-box;
            float: left;
            width: 48%;
            margin: 10px 1% 5px;
        }
}
</style>
