<template>
  <div class="hello">
    <HeaderCom :tit="title"/>
    <h1>{{ msg }}</h1>
    <h2>{{love}}</h2>
    <h3>{{msg}}</h3>
    <h4>{{msg}}</h4>
    <h5>{{hate}}</h5>
    <h6>{{love}}</h6>
    <h2>H2标题栏</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class="box">
      <div class="game-list" v-for="(item,index) in gameList" :key="index">
        <a href="https://www.baidu.com?">{{index}}:{{item.name}}&ensp;&ensp;&ensp;&ensp;{{item.price}}</a>
      </div>
    </div>
    <NavCom></NavCom>
  </div>
</template>

<script>
import NavCom from "@/components/NavCom";
import HeaderCom from "@/components/HeaderCom";
export default {
  name: 'Demo',
  data () {
    return {
      title:"不爱编程的兔子(*￣︶￣)",
      msg: 'Welcome to Your Vue.js App',
      love: '我喜欢vue',
      hate: '我讨厌react',
      gameList: [
        {name: '上衣',price: '$189'},
        {name: '裤子',price: '$289'},
        {name: '帽子',price: '$39'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
        {name: '帽子',price: '$189'},
      ]
    }
  },
  components :{
    NavCom,
    HeaderCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
</style>
