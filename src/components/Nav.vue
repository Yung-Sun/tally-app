<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="money"/>
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="labels"/>
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="statistics"/>
      统计
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
    //border: 1px solid black ;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 4px rgba(0,0,0,.3);
    > .item{
      padding: 2px 0;
      width: 33.33333333333%;
      display: flex;
      justify-content: center;
      align-items:center;
      flex-direction: column;
      font-size: 12px;
      font-family: "Microsoft YaHei UI",serif;
      .icon{
        width: 25px;
        height: 25px;
        margin: 2px 0;
      }
    }
    > .item.selected{
      color: red;
    }
  }

</style>