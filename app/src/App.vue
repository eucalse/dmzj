<template>
  <div id="app" class="container ">
    <router-view></router-view>
    <div class="row tabs">
    <router-link class="col-xs-4 tab" to="/comics">漫画</router-link>
    <router-link class="col-xs-4 tab" to="/books">轻小说</router-link>
    <router-link class="col-xs-4 tab" to="/news">新闻</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pane {
  display: block;
  width: 100%;
  overflow: auto;
  /*设置页面高度自适应，留有底部按键高度*/
  position: absolute;
  top: 5%;
  bottom: 50px;
  left: 0;
  right: 0;
}
.tabs {
  text-align: center;
  height: 50px;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  margin-left: 0px;
  padding: 0;
}
.tab {
  display: block;
  height: 50px;
  padding-top: 10px;
}
a,
a:focus,
a:hover {
  text-decoration: none;
}
a:hover {
  background-color: #28e6e1;
}
.row {
  width: 100%;
}
</style>
