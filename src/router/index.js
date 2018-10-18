import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import Home from '@/components/Home'
import List from '@/components/List'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
