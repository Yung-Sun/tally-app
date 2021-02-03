<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="money"/>
      <span>记账</span>
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="labels"/>
      <span>标签</span>
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="statistics"/>
      <span>统计</span>
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    flex-direction: row;
    background: #EEEEEE;
    box-shadow: 0 11px 25px rgba(0, 0, 0, 0.25);
    padding: 4px;
    > .item{
      padding: 2px 0;
      width: 33.33333333333%;
      display: flex;
      justify-content: center;
      align-items:center;
      flex-direction: column;
      font-size: 12px;
      color: #aaaaaa;
      font-family: Montserrat,"Microsoft YaHei UI",serif;
      .icon{
        width: 30px;
        height: 30px;
        margin: 2px 0;
      }
    }
    > .item.selected{
      color: #FF4D42;
    }
  }

</style>