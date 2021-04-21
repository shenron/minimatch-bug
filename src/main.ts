import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import App from './App.vue';

Vue.use(CompositionApi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
