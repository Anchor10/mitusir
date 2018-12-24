<template>
    <div>
        <ul class="nav-list">
            <li class="nav-item" v-for="(item,index) in category" :key="index">
                <router-link :to="item.src">
                    <i class="iconfont" :class="item.icon"></i>
                    <p>{{item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'NavCom',
    data(){
        return{
            category:[
                {
                    title:"首页",
                    src:"./",
                    icon:"icon-shouye"
                },
                {
                    title:"照片墙",
                    src:"./photo",
                    icon:"icon-picture"
                },
                {
                    title:"视频",
                    src:"./list",
                    icon:"icon-liebiao"
                },
                {
                    title:"我",
                    src:"./about",
                    icon:"icon-guanyuwomen"
                }
            ]
        }
    }

}
</script>
<style scoped>
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
    .router-link-exact-active i,
    .router-link-exact-active p{
        /* background: #218efe; */
        display: block;
        /* height: 100%; */
        color: #218efe;
    }
    .nav-list{
        max-width: 650px;
        /* margin: 0 auto; */
        display: flex;
        position: fixed;
        bottom: 0;
        /* left: 0; */
        background: #fff;
        width: 100%;
        height: 50px;
        text-align: center;
        box-shadow: -1px 0px 10px #ccc;
        z-index: 99999;
    }
    .nav-item{
        width: 25%;
        
    }
    .nav-item i{
        display: block;
        padding-top: 5px;
        font-size: 20px;
    }
    .nav-item p{
        font-size: 14px;
        margin-top: 0;
    }
    .nav-item a{
        color: #919191;
        
    }
    .active{
        color: #218efe;
    }
</style>


