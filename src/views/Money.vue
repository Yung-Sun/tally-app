<template>
  <Layout class-prefix="layout">

    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>

    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <FormItem field-name="备注"
              placeholder="请输入备注"
              value.sync="record.notes"
    />
    <Tags @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constant/recordTypeList';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})

export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };


  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNote(value: string) {
    this.record.notes = value;
  }

  onUpdateTags(value: string) {
    this.record.tags = value;
  }

  saveRecord() {
    if(!this.record.tags || this.record.tags.length === 0){
      return window.alert('选他娘的标签')
    }
    this.$store.commit('createRecord', this.record);
    window.alert('保存成功')
    this.record.notes = ''
  }
}

</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>