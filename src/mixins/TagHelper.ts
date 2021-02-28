import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请写标签名(最多五个字)');

    if (name) {
      if (name.length <= 5){
        this.$store.commit('createTag', name)
      }else{
        window.alert('名字太长啦，最多五个字')
      }
    } else {
      alert('不能留空🙅‍♀️ 请写标签名');
    }
  }
}

export default TagHelper