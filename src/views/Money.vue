<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注"/>
      </label>
    </div>
    <div class="tag">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>
<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/gobal.scss";

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

.notes {
  display: flex;
  font-size: 14px;
  background: #eee;
  padding: 0 16px;
  align-items: center;

  span {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }

}

.numberPad {
  > .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out(black, 0.5);
  }

  > .buttons {
    @extend %x;

    > button {
      float: left;
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;

      &.ok {
        float: right;
        height: 64*2px;
      }

      &.zero {
        width: 50%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*6%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*8%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*10%);
      }
    }
  }
}

</style>