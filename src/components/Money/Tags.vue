<template>
  <div class="tag">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';

@Component({
  mixins: [TagHelper]
})
export default class Tags extends mixins(TagHelper) {

  selectedTags: string[] = [];
  get tagList(){
    return this.$store.state.tagList
  }

  created(){
    this.$store.commit('fetchTags')
  }

  toggle(tag: string) {
    if (this.selectedTags.indexOf(tag) < 0) {
      this.selectedTags.push(tag);
    } else {
      const index = this.selectedTags.indexOf(tag);
      this.selectedTags.splice(index, 1);
    }
    this.$emit('update:value',this.selectedTags)
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
      background: #ccc;
      height: 24px;
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