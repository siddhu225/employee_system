<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-6-widescreen">
            <div class="box">
              <div class="field has-text-centered">
                <div class="label">
                  <div class="is-size-3 is-capitalized">FORGOT PASSWORD FORM</div>
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
                <label for class="label has-text-left"> New Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    v-model="password1"
                    required
                  />
                  <span class="icon is-small is-left has-text-grey-dark">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label has-text-left">Confirm Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    v-model="password2"
                    required
                  />
                  <span class="icon is-small is-left has-text-grey-dark">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <br><br>
              <div class="field">
                <button class="button is-success" @click="onLogin">Submit</button>
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

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      password1:"",
      password2:""
    };
  },
  components: {},
  mounted() {},
  methods: {

     async onLogin() {

      if(this.password1 ===  this.password2){
        await PostsService.postUser1({
        email: this.email,
        password: this.password1,

      });

      }
      else{
        alert("password and confrim password is not matching")
      }

      this.$router.push({ name: "login" });
  
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


