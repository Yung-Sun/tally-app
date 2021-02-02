<template>
  <Layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <ol v-if="groupList.length>0" class="recordList">
      <li v-for="(group,index) in groupList" :key="index" class="recordTitle">
        <h1>
          {{ beautify(group.title) }}
          <span>￥ {{ group.total }}</span>
        </h1>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">
      <span class="title">温 馨 提 示</span>
      <span class="content">暂时还没记录喔，赶紧记一笔吧~</span>
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
    if (tags.length === 0) {
      return '无标签';
    } else {
      return tags.map(item => item.name).join(', ');
    }
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    const {recordList} = this;
    type Result = { title: string; total?: number; items: RecordItem[] }[]
    if (recordList.length === 0) {
      return [];
    } else {
      const sortedRecordList = clone(recordList)
          .filter(r => r.type === this.type)
          .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (sortedRecordList.length === 0) {return [];}

      const result: Result = [{
        title: dayjs(sortedRecordList[0].createdAt).format('YYYY-MM-DD'),
        items: [sortedRecordList[0]]
      }];
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
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
      });
      return result;
    }
  }


  type = '-';
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
.noResult {
  margin: 40px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: #515151;
  background: #F1F1F1;
  box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  > .title{
    padding-bottom: 12px;
    font-weight: bold;
    color: #AAAAAA;
  }
  > .title::after{
    content: '';
    width: 85%;
    border-bottom: 1px solid #aaaaaa;
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
  }
  > .content{
    margin: 40px 0;
  }
}

::v-deep {
  .types-tabs {
    margin: 10px;
    justify-content: space-between;
    &-item{
      height: 48px;
      width: 45%;
    }
  }
}

.recordList {
  margin-top: 20px;
  .recordTitle {
    position: relative;
    background: #F1F1F1;
    box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 26px;
    padding: 8px 0;
    > h1 {
      padding: 0 24px;
      line-height: 20px;
      min-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.17em;
      font-weight: bold;
    }
    h1::after {
      content: '';
      width: 90%;
      border-bottom: 1px solid #aaaaaa;
      position: absolute;
      top: 45px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .record {
    padding: 0 24px;
    line-height: 16px;
    min-height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notes {
    margin-right: auto;
    margin-left: 8px;
    color: #999999;
  }
}

</style>