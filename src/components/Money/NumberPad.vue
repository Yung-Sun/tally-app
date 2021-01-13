<template>
  <div>
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
  </div>
</template>

<script lang="ts">
export default {
  name: 'NumberPad'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/gobal.scss";

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