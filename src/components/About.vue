<template>
    <div class="box">
        <HeaderCom :backShow="backShow" :tit="title"/>
        <div class="wechat">
            <img :src="src" alt="">
            <h3>扫一扫加微信,放心不是传销(*￣︶￣)</h3>
        </div>
        <div class="map-intro">
            <h4>我在这里:<span>(可切换成卫星云图)</span></h4>
        </div>
        <div id="allmap"></div>
        <div class=""></div>
        <NavCom></NavCom>
        <Totop/>
    </div>
</template>

<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
import Totop from "@/components/Totop";
export default {
    name: 'About',
    data() {
        return {
            title:"你认识我嘛",
            backShow:false,
            src: './static/images/qrcode.jpg'
        }
    },
    components :{
    NavCom,
    HeaderCom,
    Totop,
  },
  mounted(){
      // 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(118.19, 24.49), 5);  // 初始化地图,设置中心点坐标和地图级别
	// 添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("厦门");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // map.addEventListener("click", function(e){    
    //             var lat = e.point.lat;
    //             var lng = e.point.lng;
    //             alert('东经'+lng+ '北纬'+lat);
	//         });
        var myIcon = new BMap.Icon("./static/images/posi.png", new BMap.Size(32, 32), {
            // 指定定位位置
            offset: new BMap.Size(10, 25),
            // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
        });
        var point = new BMap.Point(118.189,24.491);
        // 创建标注对象并添加到地图 
        var marker = new BMap.Marker(point,{icon: myIcon});
        map.addOverlay(marker);
  }
}

</script>
<style scoped>
    .box{
        background: #f2f2f2;
        background: url(../../static/images/bg.jpeg);
        background-size: contain;
    }
    #allmap{
        width: 90%;
        margin: 0 auto;
        height: 200px;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 20px #000;
        border-radius: 5px;
    }
    .wechat img{
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        width: 40%;
        height: auto;
        box-shadow: 1px 1px 20px #000;
    }
    .map-intro span{
        color: red;
        font-size: 12px;
        font-weight: 300;
    }
</style>
