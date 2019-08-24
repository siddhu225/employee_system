<template>
    <div id="app">
    <nav class="navbar has-shadow has-background-grey-light	">
      <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <!-- <a class="navbar-item image is-64x64">
          <img src="" alt="img">
        </a>-->
      </div>
      <div class="navbar-menu has-background-grey-light	" >
        <div class="navbar-start">
          <p class="navbar-item">
            <small class="is-size-3 is-capitalized">Employee management system</small>
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
    </nav>
    <div class="section">
      <div class="field has-text-centered">
        <div class="label">
          <div class="is-size-3 is-capitalized">registration form</div>
        </div>
      </div>
      <hr />
      
      <div class="section">
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Full Name</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" class="input" placeholder="First Name" v-model="name" />
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
                  v-model="dob"
                  @click.prevent="displayDate"
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
                <input type="number" class="input" placeholder="Phone Number" v-model="number" />
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
                  <select class="has-text-centered" v-model="gender">
                    <option value="-1" disabled>Select a option</option>
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
                <input type="email" class="input" placeholder="email" v-model="email" />
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
                  <select class="has-text-centered" v-model="role">
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
                  placeholder="address"
                  v-model="address"
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
                  placeholder="experiece"
                  v-model="experience"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-centered">
          <div class="column is-4 has-text-centered">
            <div class="filed">
              <button class="button is-warning" @click="addUser">Register</button>
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
  name: "EmployeeAdd",
  data() {
    return {
      name: "",
      dob: null,
      number: "",
      gender: null,
      role: "",
      email: "",
      address: "",
      experience: ""
    };
  },
  components: {
  },
  methods: {
    async addUser() {
      let res = await PostsService.addUser({
        name: this.name,
        dob: this.dob,
        number: this.number,
        gender: this.gender,
        role: this.role,
        email: this.email,
        address: this.address,
        experience: this.experience
      });
      this.$router.push({ name: "Employees" });
    }
  }
};
</script>

<style scoped>
.select select:not([multiple]) {
  width: 500px;
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child,
p:last-child {
  margin-left: 432px;
}



hr {
  background-color: #3dcabe;
}

</style>
