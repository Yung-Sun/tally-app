<template>
  <div>
    <label class="formItem"
           :class="{'selected': selected}">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             maxlength="15"
             @focus="selected = !selected"
             @blur="selected = !selected"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {

  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  selected = false
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}

</script>

<style lang="scss" scoped>
.formItem {
  display: flex;
  font-size: 14px;
  padding: 0 16px;
  align-items: center;
  margin: 10px auto;
  width: 85%;
  position: relative;

  &.selected{
    background: #EEEEEE;
    box-shadow: inset 5px 5px 12px -2px rgba(114, 114, 114, 0.25), inset -3px -3px 16px #FFFFFF;
    border-radius: 10px;
    >span:after{
      display: none;
    }
  }
  .name {
    padding-right: 16px;
    min-width: 6em;
    color: #999999;
  }

  input {
    height: 48px;
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #999;
  }
  span:after{
    content: '';
    border:1px solid rgba(221,221,221,0.7);
    width:80% ;
    position: absolute;
    bottom: 8px;
    left: 20px;
  }
}

</style>