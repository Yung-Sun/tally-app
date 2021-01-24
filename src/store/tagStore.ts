import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagStore = {
  tagList: [] as Tag[],

  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
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