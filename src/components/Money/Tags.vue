<template>
  <div class="tag">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    if (this.selectedTags.indexOf(tag) < 0) {
      this.selectedTags.push(tag);
    } else {
      const index = this.selectedTags.indexOf(tag);
      this.selectedTags.splice(index, 1);
    }
  }

  create() {
    const name = window.prompt('输他娘的标签名');
    if (name === '') {
      window.alert('空不得，我丢，要写个名字');
    } else if (this.dataSource)
      this.$emit('update:dataSource', [...this.dataSource, name]);
  }


}
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

      &.selected {
        background: #E31F26;
        color: white;
      }
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