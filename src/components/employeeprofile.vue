<template>
  <div id="app">
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
        <div class="column is-offset-1 is-3"></div>
        <div class="column">
          <div class="field">
            <label
              class="label is-capitalized has-text-weight-bold is-size-4 is-marginless"
            >{{employeeData.name}}</label>
            <br />
            <a
              href="#"
              class="is-captitalized has-text-weight-bold is-size-5 has-text-danger"
            >{{employeeData.role}}</a>
          </div>
        </div>
        <div class="column is-offset-1">
          <router-link
            style="font-size:45px"
            class="fa fa-edit"
            v-bind:to="{ name: 'EditEmployee', params: { id: employeeData._id } }"
          ></router-link>
        </div>
      </div>
      <div class="section">
        <div class="columns is-centered">
          <div class="column aboutSec">
            <div class="columns">
              <div class="column p-t-25 is-7">
                <div class="field">
                  <label
                    class="label is-capitalized has-text-weight-bold is-size-5 has-text-info"
                  >Details:</label>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column p-t-25 is-6">
                <div class="field">
                  <label
                    class="label is-capitalized is-capitalized has-text-right has-text-link"
                  >Date of Birth -</label>
                </div>
              </div>
              <div class="column p-t-25 is-6">
                <div class="field">
                  <label class="label is-capitalized has-text-left">{{employeeData.dob}}</label>
                </div>
              </div>
            </div>
            <div class="columns m-t">
              <div class="column is-6">
                <div class="field">
                  <label
                    class="label is-capitalized is-capitalized has-text-right has-text-link"
                  >Mobile Number -</label>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label is-capitalized has-text-left">{{employeeData.number}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <div class="field">
                  <label
                    class="label is-capitalized is-capitalized has-text-right has-text-link"
                  >email -</label>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label has-text-left">{{employeeData.email}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <div class="field">
                  <label
                    class="label is-capitalized is-capitalized has-text-right has-text-link"
                  >Address -</label>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label is-capitalized has-text-left">{{employeeData.address}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <div class="field">
                  <label class="label is-capitalized has-text-right has-text-link">Experience -</label>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label is-capitalized has-text-left">{{employeeData.experience}}</label>
                </div>
              </div>
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
  props: {
    userId: {
      required: true,
      type: String
    }
  },
  name: "EmployeeProfile",
  data() {
    return {
      employeeData: {}
    };
  },
  mounted() {
    // this.getUser();
  },
  async created() {
    ({ data: this.employeeData } = await PostsService.getUser({
      id: this.userId
    }));
  },
  methods: {
    async getUser() {
      this.employeeData = (await PostsService.getUser({
        id: this.$route.params.id
      })).data;
    }
  }
};
</script>

<style scoped>
.column.aboutSec {
  position: relative;
  margin-top: -50px;
}
.tabs ul {
  border-bottom-color: white;
}
.p-t-25 {
  padding-top: 25px;
}

/* .mt {
  margin-top: 100px;
} */

#sid {
  background-color: orange;
}

#app {
  background-color: orange;
}

.section.box {
  margin-top: 3%;
  margin-left: 15%;
  margin-right: 12%;
}

.bcolor.section {
  padding: 0.3%;
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