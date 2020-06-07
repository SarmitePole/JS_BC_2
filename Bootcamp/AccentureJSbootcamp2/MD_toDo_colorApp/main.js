import Vue from 'vue';
import App from './App.vue';


new Vue({
    render: fooBoo => fooBoo(App)
}).$mount('#app');