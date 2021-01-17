<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{ tag }}</span>
        <Icons name="right"/>
      </li>
    </ol>
    <div class="createTagsWrapper">
      <button class="createTags" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component

export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('写他娘的标签名');
    if (name) {
      const uploadMessage = tagListModel.create(name);
      if (uploadMessage === 'duplicated'){
        window.alert('重他娘的名')
      }else if (uploadMessage === 'success'){
        window.alert('创建成功')
      }
    }else {
      alert('不能留空🙅‍♀️ 写他娘的标签名')
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > li {
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