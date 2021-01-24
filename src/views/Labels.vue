<template>
  <Layout>
    <div class="tags">
      <router-link v-for="tag in tags" :key="tag.id" class="tag" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icons name="right"/>
      </router-link>
    </div>
    <div class="createTagsWrapper">
      <Button class="createTags" @click.native="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';


@Component({
  components: {Button},
  computed: {
    // tags() {
    //   return this.$store.tagList;
    // }
  }
})

export default class Labels extends Vue {
  //TODO
  // tags = store.tagList;
  tags = [];

  createTag() {
    const name = window.prompt('写他娘的标签名');
    if (name) {
      // TODO
      // store.createTag(name);
    } else {
      alert('不能留空🙅‍♀️ 写他娘的标签名');
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;

    svg {
      width: 12px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTagsWrapper {
  text-align: center;
  padding-top: 44px;

  > .createTags {
    background: #666666;
    color: white;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
  }
}

</style>