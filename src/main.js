import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import store from './store';
import './registerServiceWorker';
import "./../node_modules/bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import * as firebase from "firebase";
// import http from 'http'

import axios from 'axios'
import VueAxios from 'vue-axios'
    
Vue.use(VueAxios, axios)






Vue.use(Buefy);

Vue.config.productionTip = false



const config = {
  apiKey: "AIzaSyA8dkU8AqpPSC0R2pZqLbPhY_yOXPxvkbA",
  authDomain: "employee-system-33d86.firebaseapp.com",
  databaseURL: "https://employee-system-33d86.firebaseio.com",
  projectId: "employee-system-33d86",
  storageBucket: "",
  messagingSenderId: "248643797483",
  appId: "1:248643797483:web:69045170b41cf2c4"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);



const messaging = firebase.messaging();


var token1;

messaging.usePublicVapidKey("BMyj0aBOipYu_8zFj2R2sYAu0hIIni_MnIa6yfucd7tnPmmlcy8DPC7r5AZ8I9r65KBslFJU1h_5gE5yQcbV8yk"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token);
    token1=token;
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


axios({
  method: 'post',
  responseType: 'json',
  url: `localhost:8081/get_token`,
  data: {
    token:token1
  }
})
 .then(response => {
   console.log(response);
 })
 .catch(error => {
  console.log(error);
 });



// let headers = {
//   'Content-Type': 'application/json;charset=utf-8'
// };

// if(token1 !== '') {
//   headers['TOKEN'] = token1
// }
// http.post("localhost:8081/get_token", {headers})
//        .then(this.extractData)
//        .catch(this.handleError);