<template>
  <div id="editpemployee">
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <!-- <a class="navbar-item image is-64x64">
          <img src="" alt="img">
        </a>-->
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <p class="navbar-item">
            <small>Employee management system</small>
          </p>
        </div>
        <hr />
        <div class="navbar-end">
          <div class="navbar-item"></div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">Sai Siddardha</div>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-user-circle-o"></i>
                  </span>
                  Profile
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-bug"></i>
                  </span>
                  Report Bug
                </div>
              </a>
              <a class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <i class="fa fa-sign-out"></i>
                  </span>
                  Sign Out
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="field has-text-centered">
        <div class="label">
          <div class="is-size-3 is-capitalized">Employee Edit form</div>
        </div>
      </div>
      <div class="section">
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Full Name</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" class="input" v-model="employeeData.name" />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Date of Birth</label>
            </div>
            <div class>
              <b-field>
                <b-datepicker
                  ref="datepicker"
                  expanded
                  placeholder="Select a date"
                  v-model="employeeData.dob"
                ></b-datepicker>
              </b-field>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Mobile no.</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="number" class="input" v-model="employeeData.number" />
                <span class="icon is-mall">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Gender</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <div class="select">
                  <select class="has-text-centered" v-model="employeeData.gender">
                    <option value="1" disabled>Select a option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
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
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Email</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="email" class="input" v-model="employeeData.email" />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">department / office</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <div class="select">
                  <select class="has-text-centered" v-model="employeeData.role">
                    <option value="1" disabled>Select a option</option>
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
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Address</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <textarea
                  style="width:100"
                  type="text"
                  class="textarea"
                  v-model="employeeData.address"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Experience</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <textarea
                  style="width:100"
                  type="text"
                  class="textarea"
                  v-model="employeeData.experience"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Password</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input
                  type="pass"
                  class="input"
                  placeholder="email"
                  v-model="employeeData.password"
                />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-centered">
          <div class="column is-4 has-text-centered">
            <div class="filed">
              <button class="button is-warning" @click="updatePost">UPDATE</button>
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
      await PostsService.updatePost({
        id: this.$route.params.id,
        image:this.file,
        name: this.employeeData.name,
        dob: this.employeeData.dob,
        number: this.employeeData.number,
        gender: this.employeeData.gender,
        email: this.employeeData.email,
        address: this.employeeData.address,
        experience: this.employeeData.experience,
        password: this.employeeData.password,
      });
      this.$router.push({ name: "Employees" });
    },
   
  }
};
</script>

<style scoped>
.column.aboutSec {
  position: relative;
  margin-top: -100px;
}
.tabs ul {
  border-bottom-color: white;
}
.p-t-25 {
  padding-top: 25px;
}

.mt {
  margin-top: -100px;
}
</style>