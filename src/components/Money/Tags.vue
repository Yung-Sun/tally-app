<template>
  <div class="tag">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
.tag {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    > li {
      background: #eeeeee;
      height: 24px;
      width: 49px;
      border-radius: 12px;
      margin-right: 13px;
      margin-top: 8px;
      text-align: center;
      line-height: 24px;
      padding: 0 16px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      padding: 1px 3px;
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid #222222;
    }
  }
}
</style>