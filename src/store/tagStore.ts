import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as Tag[];
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('重他娘的名');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name: name});
    this.saveTags();
    window.alert('创建成功');
    return 'success';
  },
  removeTag: (id: string) => {
    let index = -1
    for (let i=0; i < tagStore.tagList.length; i++) {
      if(tagStore.tagList[i].id === id){
        index = i;
        break;
      }
    }
    tagStore.tagList.splice(index,1)
    tagStore.saveTags()
    return true
  },
  updateTag: (id: string, name: string) => {
    const idList = tagStore.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = tagStore.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = tagStore.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        tagStore.saveTags();
        return 'success';
      }
    } else {
      return 'not found';
    }
  }
};

tagStore.fetchTags()

export default tagStore