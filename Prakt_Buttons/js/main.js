import Vue from 'vue';

import App from './components/App.vue';

new Vue({
  render: bar => bar(App),
}).$mount('#app');
