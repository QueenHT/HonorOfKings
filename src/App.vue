<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less">
// @import "~vux/src/styles/reset.less";
body,html{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;

}
}

</style>
