<template>
  <div>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="buttons">
        <button @click="inputNumber">1</button>
        <button @click="inputNumber">2</button>
        <button @click="inputNumber">3</button>
        <button @click="remove">删除</button>
        <button @click="inputNumber">4</button>
        <button @click="inputNumber">5</button>
        <button @click="inputNumber">6</button>
        <button @click="clear">归零</button>
        <button @click="inputNumber">7</button>
        <button @click="inputNumber">8</button>
        <button @click="inputNumber">9</button>
        <button @click="submit" class="ok">OK</button>
        <button @click="inputNumber" class="zero">0</button>
        <button @click="inputNumber">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output = '0';

  inputNumber(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const inputText = button.textContent!; //感叹号表示该变量类型可能是‘空’以外的任意类型。
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(inputText) >= 0) {
        this.output = inputText;
      } else {
        this.output = '0.';
      }
      return;
    }
    if (this.output.indexOf('.') >= 0) {
      if (inputText === '.') {return;}
    }
    this.output += inputText;
  }

  remove(){
    if(this.output.length>1){
      this.output = this.output.slice(0, -1)
    }else {
      this.output = '0'
    }
  }

  clear(){
    this.output = '0'
  }

  submit(){
    console.log('确认了');
  }

}
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