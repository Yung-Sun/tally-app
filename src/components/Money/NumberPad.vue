<template>
  <div>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="buttons">
        <button @click="inputNumber">1</button>
        <button @click="inputNumber">2</button>
        <button @click="inputNumber">3</button>
        <button @click="remove" class="delete"><span>刪 除</span></button>
        <button @click="inputNumber">4</button>
        <button @click="inputNumber">5</button>
        <button @click="inputNumber">6</button>
        <button @click="clear"><span>清 空</span></button>
        <button @click="inputNumber">7</button>
        <button @click="inputNumber">8</button>
        <button @click="inputNumber">9</button>
        <button @click="submit" class="ok"><span>提 交</span></button>
        <button @click="inputNumber" class="zero">0</button>
        <button @click="inputNumber">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();

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

  remove() {
    if (this.output.length > 1) {
      this.output = this.output.slice(0, -1);
    } else {
      this.output = '0';
    }
  }

  clear() {
    this.output = '0';
  }

  submit() {
    const lastNumber = this.output.substr(this.output.length - 1, this.output.length);
    if (lastNumber === '.') {
      this.output += '0';
    }
    if (parseFloat(this.output) !== 0){
      this.$emit('update:value', parseFloat(this.output));
      this.$emit('submit', parseFloat(this.output));
      this.output = '0';
    }else{
      alert('0元记个der，要写钱')
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/gobal.scss";
@import "~@/assets/style/font.css";

.numberPad {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  > .output {
    font-size: 36px;
    font-family: Montserrat-Light, Consolas, monospace;
    padding: 9px;
    text-align: right;
    width: 75%;
    background: #EEEEEE;
    box-shadow: inset 5px 5px 12px -2px rgba(114, 114, 114, 0.25), inset -3px -3px 16px #FFFFFF;
    border-radius: 10px;

  }

  > .buttons {
    @extend %x;
    width: 75%;
    margin: 10px auto;
    transform: translateX(5px); //使键盘保持居中


    > button {
      float: left;
      width: 21%;
      height: 60px;
      border: none;
      margin-bottom: 10px;
      margin-right: 4%;
      background: #F1F1F1;
      box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      color: #515151;
      font-family: Montserrat-Light, $font-hei;
      > span{
        writing-mode: vertical-lr;
      }
      &.delete{
        background: #FF4D42;
        color: white;
      }
      &.ok {
        float: right;
        height: 130px;
      }
      &.zero {
        width: 45%;
      }
    }
  }
}
</style>