<template>
  <Layout>
    <header>
      <Icons class="leftIcon" name="left" @click.native="goback"/>
      <span class="title">编辑标签</span>
      <span class="occupation"></span>
    </header>

    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名"
                placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  // tag = store.findTag(this.$route.params.id);
  tag?: Tag = undefined;

  created() {
    this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (store.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert('删除失败');
      }
    }
  }

  goback() {
    this.$router.back();
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

.button-wrapper {
  margin-top: 16*3px;
  text-align: center;
}

;
</style>