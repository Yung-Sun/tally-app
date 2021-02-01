<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/gobal.scss";
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/font.css";
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Montserrat, $font-hei;
  color: #515151;
  font-size: 16px;
  background: #EEEEEE;
}
#app{
  max-width: 500px;
  min-width: 260px;
  margin: 0 auto;
}


</style>
