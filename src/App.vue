<template>
  <div id="app">
    <a href="http://www.qust.edu.cn/info/1641/8640.htm" class="qust-ad"><img src="http://www.qust.edu.cn/__local/5/12/C1/62DA6F5ABF108CA4B4BFCBA052B_DCB36174_74157.jpg"></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.qust-ad{
  display: block;
  width: 100%;
  height: 80px;
  overflow: hidden;
}
.qust-ad img{
  width: 100%;
}
</style>
