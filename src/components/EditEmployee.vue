<template>
  <div id="editpemployee">
   <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item image is-64x64">
          <img :src="require('@/assets/projectLogo.png')" alt="img" />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <p class="navbar-item">
            <small class="is-size-3 is-capitalized has-font-weight-bold">EMPLOYEE MANAGEMENT SYSTEM</small>
          </p>
        </div>
        <hr />
        <div class="navbar-end">
          <div class="navbar-item"></div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">Actions</div>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link
            :to="{ name: 'login' }"
            class="link"
          >signout</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
   <div class="section box">
      <div class="columns is-centered">
        <div class="column">
          <div class="field has-text-centered">
            <div class="label">
              <div class="is-size-3 is-capitalized has-font-weight-bold">EMPLOYEE EDIT FORM</div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Full Name</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" class="input" placeholder="First Name" v-model="employeeData.name" />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Date of Birth</label>
            </div>
            <div class>
              <b-field>
                <b-datepicker
                  ref="datepicker"
                  expanded
                  v-model="employeeData.dob"
                ></b-datepicker>
              </b-field>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Mobile no.</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="number" class="input" placeholder="Phone Number" v-model="employeeData.number" />
                <span class="icon is-mall">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Email</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="email" class="input" placeholder="email" v-model="employeeData.email" />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">department / office</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <div class="select">
                  <select class="has-text-centered" v-model="employeeData.role">
                    <option value="-1" disabled>Select a option</option>
                    <option value="Admin">Admin</option>
                    <option value="Software Enginner">Software Enginner</option>
                    <option value="Qa Engineer">Qa Engineer</option>
                    <option value="Intern">Intern</option>
                    <option value="Plugin team">Plugin team</option>
                  </select>
                  <span class="icon is-mall">
                    <i class="fa fa-list"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Address</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <textarea
                  style="width:100"
                  type="text"
                  class="textarea"
                  placeholder="address"
                  v-model="employeeData.address"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Experience</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <textarea
                  style="width:100"
                  type="text"
                  class="textarea"
                  placeholder="experiece"
                  v-model="employeeData.experience"
                />
              </div>
            </div>
          </div>
        </div>
         <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Password</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="pass" class="input" placeholder="Phone Number" v-model="employeeData.password" />
                <span class="icon is-mall">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        

        <div class="columns is-centered">
          <div class="column is-7 has-text-centered">
            <div class="filed">
              <button class="button is-warning" @click="updatePost">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section bcolor"></div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "EditEmployee",
  data() {
    return {
      employeeData: {},
      file:'',
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    handleFileUpload(){
    this.file = this.$refs.file.files[0];
    
  },
    async getPost() {
      this.employeeData = (await PostsService.getPost({
        id: this.$route.params.id
      })).data;
      this.employeeData.dob = new Date(this.employeeData.dob);
    },
    
    async updatePost() {
      let res = await PostsService.updatePost({
        id: this.$route.params.id,
        image:this.file,
        name: this.employeeData.name,
        dob: this.employeeData.dob,
        number: this.employeeData.number,
        role: this.employeeData.role,
        email: this.employeeData.email,
        address: this.employeeData.address,
        experience: this.employeeData.experience,
        password: this.employeeData.password,
      });
      if (res.data == "admin") {
        this.$buefy.toast.open({
                    duration: 5000,
                    message: 'Employee named  '+this.employeeData.name+'   edited his profile',
                    type: 'is-info',
                    position: 'is-top',
                });
        this.$router.push({ name: "Employees" });
      } else  {
        this.$buefy.toast.open({
                    duration: 5000,
                    message: 'Employee named'+this.employeeData.name+'edited his profile',
                    type: 'is-info',
                    position: 'is-top-right',
                });
        this.$router.push({
          name: "EmployeeProfile",
          params: { userId: res.data }
        });
      }
    },
   
  }
};
</script>

<style scoped>
.select select:not([multiple]) {
  width: 500px;
}

hr {
  background-color: #3dcabe;
}

.section.box {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 6%;
}


#editpemployee,
.bcolor {
  background-color: #92b679;
}
.bcolor.section {
  padding: 2.5%;
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child,
p:last-child {
  margin-left: 322px;
}
</style>