import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex); // 把 store 绑到 Vue.prototype。 Vue.prototype.$store = store



const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    //CurrentTag
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },

    // Record
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    // Tag
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]') as Tag[];
      const maxTagId = JSON.parse(window.localStorage.getItem('_idMax') as string)
      if (state.tagList.length === 0 && !maxTagId){
        store.commit('createTag', '衣')
        store.commit('createTag', '食')
        store.commit('createTag', '住')
        store.commit('createTag', '行')
      }
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('重他娘的名');
      }else{
        if (name.length > 5){
          window.alert('名字太长啦，最多五个字')
        }else{
          const id = createId().toString();
          state.tagList.push({id, name: name});
          store.commit('saveTags');
        }
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTag(state, payload: { id: string; name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          alert('重复了！');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      } else {
        alert('修改失败');
      }
    },
    removeTag(state,id: string){
      let index = -1
      for (let i=0; i < state.tagList.length; i++) {
        if(state.tagList[i].id === id){
          index = i;
          break;
        }
      }
      state.tagList.splice(index,1)
      store.commit('saveTags')

    }
  },
});


export default store;