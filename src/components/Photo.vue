<template>
  <div class="hello">
    <HeaderCom :tit="title" :backShow="backShow" />
    <div class="con-box">
      <ul class="con-list photo-list">
        <li class="con-item photo-pic" v-for="(item,index) in photoList" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </li>
      </ul>
    </div>
    <NavCom></NavCom>
  </div>
</template>

<script>
  import NavCom from "@/components/NavCom";
  import HeaderCom from "@/components/HeaderCom";
  export default {
    name: 'Photo',
    data() {
      return {
        title: "照片墙",
        backShow: false,
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
    components: {
      NavCom,
      HeaderCom
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .con-box{
    padding: 5px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .photo-list{
        column-gap:10px;
        -moz-column-count:2; /* Firefox */
        -webkit-column-count:2; /* Safari 和 Chrome */
        column-count:2;
        column-rule-style: dashed;
        column-rule-color: rgba(255,255,255,0.8);
    }
    .con-list{
      box-sizing: border-box;
        overflow: hidden;
        width: 100%;
    }
    .con-list .con-item{
      box-sizing: border-box;
        background: #fff;
        padding: 0px 5px;
        margin-bottom: 5px;
        border-radius: 5px;
        border-top: 5px solid #fff;
        border-bottom: 5px solid #fff;
        break-inside: avoid;
    }
    .con-list .con-item.photo-pic img{
        display: block;
        width: 100%;
    }
</style>
