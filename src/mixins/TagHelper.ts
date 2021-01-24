// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('写他娘的标签名');
    if (name) {
      this.$store.commit('createTag', name)
    } else {
      alert('不能留空🙅‍♀️ 写他娘的标签名');
    }
  }
}

export default TagHelper