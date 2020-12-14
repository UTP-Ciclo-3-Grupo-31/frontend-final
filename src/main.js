import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const base = axios.create({
  baseURL : 'https://frozen-shelf-78310.herokuapp.com/'
})

Vue.config.productionTip = false

Vue.prototype.$http = base;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
