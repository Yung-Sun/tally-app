<template>
  <Layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>

    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h1 class="title">{{ group.title }}</h1>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString( item.tags )}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>

  </Layout>
</template>
<style scoped type="scss">
.title {
  padding: 0 16px;
  line-height: 20px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:1.17em;
  margin: .5em 0;
  font-weight: bold;
}
.record {
  padding: 0 16px;
  line-height: 20px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}
.notes{
  margin-right: auto;
  margin-left: 8px;
  color: #999999;
}
</style>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constant/intervalList';
import recordTypeList from '@/constant/recordTypeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  created() {
    this.$store.commit('fetchRecords');
  }
  tagString(tags: Tag[]){
    return tags.length=== 0 ? '无' : tags.join(',')

  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string; items: RecordList[] }

    const hashTable: { [key: string]: HashTableValue[] } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createdAt.split('T');
      hashTable[data] = hashTable[data] || {title: data, items: []};
      hashTable[data].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .types-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}
</style>