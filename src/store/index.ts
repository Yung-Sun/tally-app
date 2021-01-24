import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import recordStore from '@/store/recordStore';

Vue.use(Vuex); // 把 store 绑到 Vue.prototype。 Vue.prototype.$store = store



const store =  new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations:{
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },

    createRecord(state, record){
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2)
      store.commit('saveRecords');
    },
    saveRecords() {
      window.localStorage.setItem('recordList', JSON.stringify(store.state.recordList));
    },
  },
});

console.log(store.state.recordList);

export default store