import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import store from './store';
import './registerServiceWorker';
import "./../node_modules/bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
    
Vue.use(VueAxios, axios)


Vue.use(Buefy);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


