<template>
  <div class="wrapper">
    <div class="messageBox">
      <div>死胡同，看看网址有没有写错</div>
      <div>
        <router-link to='/' class="button">返回首页</router-link>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  position: relative;

  > .messageBox {
    padding: 10px;
    border: 1px solid #666666;
    width: 80vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%);

    .button {
      display: inline-block;
      color: white;
      border-radius: 8px;
      background: #E31F26;
      padding: 8px;
      margin-top: 12px;
    }
  }
}

</style>