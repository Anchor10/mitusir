<template>
  <div id="app">
    <a href="http://app.3733.com/" class="qust-ad"><img src="../static/images/5a.jpg"></a>
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
body,html{
  max-width: 650px;
  background: url(/static/images/bg.jpeg) no-repeat;
        background-size: 100% auto;
        background-attachment: fixed;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 50px;
}
.qust-ad{
  display: block;
  width: 100%;
  overflow: hidden;
}
.qust-ad img{
  width: 100%;
  display: block;
}
</style>
