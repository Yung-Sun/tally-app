<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount"/>
    <Types @update:value="onUpdateType"/>
    <Notes @update:value="onUpdateNote"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

import {Component} from 'vue-property-decorator';

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];

  onUpdateAmount(value: string) {
    console.log(value);
  }

  onUpdateType(value: string) {
    console.log(value);
  }

  onUpdateNote(value: string) {
    console.log(value);
  }

  onUpdateTags(value: string[]) {
    console.log(value);
  }
}

</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>