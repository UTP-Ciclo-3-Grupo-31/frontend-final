import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://frozen-shelf-78310.herokuapp.com/api/';
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");