<template>
  <Layout>
    <button @click="goback" class="goBack">
      <Icons class="leftIcon" name="left"/>
      <span class="title">保存并返回</span>
    </button>

    <FormItem :value="currentTag.name"
              @update:value="update"
              field-name="标签名"/>
    <div class="delete-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }


  update(name: string) {
    this.$store.commit('updateTag', {id: this.currentTag.id, name});
  }

  remove() {
    if (this.currentTag) {
      if (confirm('真他娘的要删？')) {
        this.$store.commit('removeTag', this.currentTag.id);
        this.$router.back();
      }
    }
  }

  goback() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.goBack {
  margin: 30px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #F1F1F1;
  box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #FF4D42;

  > .leftIcon {
    width: 11px;
    height: 11px;
    margin-right: 8px;
  }

  > .title {
    font-size: 12px;
  }
}

.delete-wrapper {
  margin-top: 16*3px;
  text-align: center;
}

;
</style>