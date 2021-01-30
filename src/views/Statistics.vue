<template>
  <Layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <ol v-if="groupList.length>0">
      <li v-for="(group,index) in groupList" :key="index">
        <h1 class="title">
          {{ beautify(group.title) }}
          <span>￥ {{ group.total }}</span>
        </h1>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString( item.tags )}}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
<div v-else class="noResult">
  <span>啥也没有，散会！</span>
</div>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constant/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';


@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  created() {
    this.$store.commit('fetchRecords');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const today = dayjs();
    const yesterday = today.subtract(1, 'day');
    const beforeYesterday = today.subtract(2, 'day');
    if (day.isSame(today, 'day')) {
      return '今天';
    } else if (day.isSame(yesterday, 'day')) {
      return '昨天';
    } else if (day.isSame(beforeYesterday, 'day')) {
      return '前天';
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  tagString(tags: Tag[]) {
    if (tags.length === 0){
      return '无标签'
    }else{
      return tags.map(item => item.name).join(', ')
    }
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    const {recordList} = this;
    type Result = {title: string;total?: number;items: RecordItem[]}[]
    if (recordList.length === 0) {
      return [];
    } else {
      const sortedRecordList = clone(recordList)
          .filter(r => r.type === this.type)
          .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if(sortedRecordList.length === 0){return [];}

      const result: Result = [{title: dayjs(sortedRecordList[0].createdAt).format('YYYY-MM-DD'), items: [sortedRecordList[0]]}];
      for (let i = 1; i < sortedRecordList.length; i++) {
        const current = sortedRecordList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum,item)=> sum+ item.amount,0)
      })
      return result;
    }
  }

  // beforeCreate() {
  //   this.$store.commit('fetchRecords');
  // }

  type = '-';
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
.noResult{
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  color: #777;
}


::v-deep {
  .types-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        background: #E31F26;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

.title {
  padding: 0 16px;
  line-height: 20px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.17em;
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

.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999999;
}
</style>