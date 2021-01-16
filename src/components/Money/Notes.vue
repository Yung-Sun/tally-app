<template>
  <div>
    <label class="notes">
      <span>备注</span>
      <input type="text" v-model="value"
             placeholder="在这里输入备注"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}

</script>

<style lang="scss" scoped>
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
    color: #555;
  }
}
</style>