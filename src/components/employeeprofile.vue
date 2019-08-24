<template>
  <div id="app">
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <!-- <a class="navbar-item image is-64x64">
          <img src="./prof.png" alt="img">
        </a>-->
      </div>
      <div class="navbar-menu">
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
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-offset-2 is-3">
          <img
            src="/home/sharat/Desktop/employee-management-system/client/prof.png"
            alt="user image"
            width="200"
          />
        </div>
        <div class="column">
          <div class="field">
            <label
              class="label is-capitalized has-text-weight-bold is-size-4 is-marginless"
            >{{employeeData.name}}</label>
            <br />
            <a href="#" class="is-captitalized has-text-weight-bold is-size-5">{{employeeData.role}}</a>
          </div>
          <div class="field">
            <label class="label">
              <span class="is-uppercase has-text-grey">ranking</span>
              <span class="has-text-weight-bold">&nbsp;8/10</span>
            </label>
          </div>
        </div>
        <div class="column is-offset-1">
          <router-link
            style="font-size:40px"
            class="fa fa-edit"
            v-bind:to="{ name: 'EditEmployee', params: { id: employeeData._id } }"
          ></router-link>
        </div>
      </div>
      <div class="section">
        <div class="columns">
          <div class="column is-offset-1 is-3">
            <div class="field">
              <label class="label has-text-grey is-uppercase">work link</label>
            </div>
            <div class="field">
              <label class="label is-capitalized is-marginless">website link</label>
              <label class="label is-capitalized is-marginless">bootsnipp profile</label>
              <label class="label is-capitalized">bootply profile</label>
            </div>
          </div>
          <div class="column aboutSec">
            <div class="tabs">
              <ul>
                <li class="is-active" width="20">
                  <a class="has-text-grey has-text-weight-bold" href="#">About</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <div class="column p-t-25 is-3">
                <div class="field">
                  <label class="label is-capitalized">Date of Birth</label>
                </div>
              </div>
              <div class="column p-t-25">
                <div class="field">
                  <label class="label is-capitalized">{{employeeData.dob}}</label>
                </div>
              </div>
            </div>
            <div class="columns m-t">
              <div class="column is-3">
                <div class="field">
                  <label class="label is-capitalized">Mobile Number</label>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label is-capitalized">{{employeeData.number}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-3">
                <div class="field">
                  <label class="label is-capitalized">email</label>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label is-capitalized">{{employeeData.email}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-3">
                <div class="field">
                  <label class="label is-capitalized">Address</label>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label is-capitalized">{{employeeData.address}}</label>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-3">
                <div class="field">
                  <label class="label is-capitalized">Experience</label>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label is-capitalized">{{employeeData.experience}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="columns">
            <div class="column is-offset-1">
              <div class="field">
                <label class="label has-text-grey is-uppercase">skills</label>
              </div>
              <div class="field">
                <label class="label is-capitalized is-marginless">web designer</label>
                <label class="label is-capitalized is-marginless">web developer</label>
                <label class="label is-capitalized is-marginless">wordpress</label>
                <label class="label is-uppercase">php, .net</label>
              </div>
            </div>
        </div>-->
      </div>
    </div>
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
    ({ data : this.employeeData } = await PostsService.getUser({
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