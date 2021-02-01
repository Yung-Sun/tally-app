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
    padding: 10px;

    > li {
      height: 30px;
      margin-right: 13px;
      margin-top: 8px;
      text-align: center;
      line-height: 30px;
      color: #515151;
      padding: 0 20px;
      background: #F1F1F1;
      box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
      border-radius: 8px;

      &.selected {
        background: #FF4D42;
        color: white;
      }
    }
  }
  > .new {
    padding-top: 5px;
    padding-left: 10px;
    button {
      padding: 1px 3px;
      background: transparent;
      border: none;
      color: #999999;
      border-bottom: 1px solid #999999;
    }
  }
}
</style>