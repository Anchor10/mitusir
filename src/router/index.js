import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/Photo'
import Home from '@/components/Home'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode:'history',
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
