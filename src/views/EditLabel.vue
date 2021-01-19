<template>
  <Layout>
    <header>
      <Icons class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="occupation"></span>
    </header>

    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .leftIcon {
    width: 16px;
    height: 16px;
  }

  > .occupation {
    width: 16px;
    height: 16px;
  }
}
  .form-wrapper {
    background: white;
    margin-top: 16px;
  }

  .button-wrapper{
    margin-top: 16*3px;
    text-align: center;
  };

</style>