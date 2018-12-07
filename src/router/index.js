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
      component: Home
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
