<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/gobal.scss";
@import "~@/assets/style/reset.scss";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-hei;
  color: #333;
  font-size: 16px;
  background: #eee;
}
#app{
  max-width: 500px;
  min-width: 260px;
  margin: 0 auto;
}


</style>
