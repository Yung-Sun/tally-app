<template>
  <div>
    <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
      <li v-for="item in dataSource" :key="item.value"
          :class="liClass(item)" class="tabs-item"
          @click="select(item)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string ; value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
 liClass(item: DataSourceItem){
   return {
     [this.classPrefix+'-tabs-item']: this.classPrefix,
     selected: item.value === this.value
   }

 }

  select(item: DataSourceItem){
    this.$emit('update:value',item.value)
  }

}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 18px;
  padding: 0 15px;
  &-item {
    width: 45%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: rgba(170, 170, 170, 0.8);
    background: #F1F1F1;
    box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    &.selected{
      color: #FF4D42;
    }
  }
}
</style>