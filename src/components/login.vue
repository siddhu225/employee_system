<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <div class="box">
              <div class="field has-text-centered">
                <div class="label">
                  <div class="is-size-3 is-capitalized">LOGIN FORM</div>
                  <hr />
                </div>
              </div>
              <div class="field">
                <label for="email" class="label is-capitalized has-text-left">Email</label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    class="input"
                    v-model="email"
                    required
                  />
                  <span class="icon is-small is-left has-text-grey-dark">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label has-text-left">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left has-text-grey-dark">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <router-link
                  class="has-text-right"
                  v-bind:to="{ name: 'ForgotPassword' }"
                  style="color:blue"
                >Forgot Password?</router-link>
              </div>
              <div class="field">
                <button class="button is-success" @click="onLogin">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
import * as firebase from "firebase";


export default {
  name: "app",
  data() {
    return {
      email: "",
      password: "",
      token1: null
    };
  },
  components: {},
  mounted() {},
  async created() {
    const config = {
      apiKey: "AIzaSyA8dkU8AqpPSC0R2pZqLbPhY_yOXPxvkbA",
      authDomain: "employee-system-33d86.firebaseapp.com",
      databaseURL: "http://employee-system-33d86.firebaseio.com",
      projectId: "employee-system-33d86",
      storageBucket: "",
      messagingSenderId: "248643797483",
      appId: "1:248643797483:web:69045170b41cf2c4"
    };

    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    messaging.usePublicVapidKey(
      "BMyj0aBOipYu_8zFj2R2sYAu0hIIni_MnIa6yfucd7tnPmmlcy8DPC7r5AZ8I9r65KBslFJU1h_5gE5yQcbV8yk"
    ); 

    
    let token1;
    await messaging.requestPermission();

    console.log("Notification permission granted.");

   
    this.token1 = await messaging.getToken();
    console.log("output--", this.token1);
    
  },
  methods: {
    async onLogin() {
      console.log("helloo siddhu");

      let res = await PostsService.postUser({
        email: this.email,
        password: this.password,
        token:this.token1
      });
      if (res.data == "admin") {
        this.$router.push({ name: "Employees" });
      } else if (res.data == "not_user") {
        this.$router.push({ name: "login" });
        alert("Please register first");
      } else {
        this.$router.push({
          name: "EmployeeProfile",
          params: { userId: res.data }
        });
      }
    }
  }
};
</script>

<style scoped>
.hero.is-primary {
  background-color: #d3f1ec;
  color: #fff;
}

hr {
  background-color: #3dcabe;
}
</style>


