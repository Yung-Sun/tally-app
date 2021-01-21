import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);

window.tagList = tagListModel.fetch();
window.createTag = (name: string) => {
  const uploadMessage = tagListModel.create(name);
  if (uploadMessage === 'duplicated') {
    window.alert('重他娘的名');
  } else if (uploadMessage === 'success') {
    window.alert('创建成功');
  }

};

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
