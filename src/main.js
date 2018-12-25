// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import '../static/js/jquery.js'
import '../static/js/common.js'
Vue.config.productionTip = false//阻止启动生产消息


Vue.use(VueLazyload,{
  preLoad: 1.1,
  error:require('../static/images/error.gif'),
  loading:require('../static/images/loading.gif'),
  attempt: 1,
  })
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
