<template>
  <Layout>
    <div class="tags">
      <router-link v-for="tag in tags" :key="tag.id" class="tag" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icons name="right"/>
      </router-link>
    </div>
    <div class="createTagsWrapper">
      <Button class="createTags" @click.native="createTag">新 建 标 签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';


@Component({
  mixins: [TagHelper],
  components: {Button},
})

export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  created(){
    this.$store.commit('fetchTags')
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #EEEEEE;
  font-size: 16px;
  padding: 16px;
  color: #515151;
  > .tag {
    padding: 0 24px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F1F1F1;
    box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 12px 0;
    svg {
      width: 12px;
    }
  }
}

.createTagsWrapper {
  text-align: center;
  padding-top: 44px;

  > .createTags {
    font-size: 16px;
    border: none;
    width: 144px;
    height: 48px;
    padding: 0 16px;
    background: #FF4D42;
    color: white;
    box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
}

</style>