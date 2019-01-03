import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/Photo'
import Home from '@/components/Home'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    // 兼容  点击返回会返回到原来的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: Home
    },
    {
      path: '/photo',
      name: 'Photo',
      meta:{index:1},
      component: Photo
    },
    {
      path: '/list',
      name: 'List',
      meta:{index:2},
      component: List
    },
    {
      path: '/about',
      name: 'About',
      meta:{index:3},
      component: About
    },
    {
      path:'*',
      meta:{index:0},
      redirect:'/',
    }
  ]
})
