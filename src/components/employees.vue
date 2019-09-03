<template>
  <div class="Employees">
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
    <br />
    <label class="is-size-4 is-uppercase has-text-weight-bold">Employees</label>
    <div v-if="Employees.length > 0" class="table-wrap">
      <div>
        <span class="leftSearch">
          <input
            type="text"
            placeholder="search..."
            v-model="search"
            @keyup="filteredEmployee"
            class="input"
          />
          <button class="button">search</button>
        </span>
        <span class="is-pulled-right">
          <router-link
            :to="{ name: 'EmployeeAdd' }"
            class="button is-success is-rounded"
          >Add Employee</router-link>
        </span>
      </div>
      <table border="0px solid blue">
        <tr>
          <td width="450">Name</td>
          <td width="200">Date of Birth</td>
          <td width="250">Mobile Number</td>
          <td width="100">Gender</td>
          <td width="100">Email</td>
          <td width="100">Role</td>
          <td width="200" class="has-text-centered">Actions</td>
        </tr>
        <tr v-for="employee in Employees" :key="employee._id">
          <td>{{ employee.name | uppercase  }} </td>
          <td>{{ employee.dob }}</td>
          <td>{{ employee.number }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.email}}</td>
          <td>{{ employee.role }}</td>
          <td class="has-text-right">
            <router-link
              style="font-size:26px"
              class="fa fa-eye"
              v-bind:to="{ name: 'EmployeeProfile', params: { userId: employee._id } }"
            ></router-link>&nbsp;
            <router-link
              style="font-size:26px"
              class="fa fa-edit"
              v-bind:to="{ name: 'EditEmployee', params: { id: employee._id } }"
            ></router-link>&nbsp;
            <a
              class="fa fa-trash"
              style="font-size:26px"
              @click="deleteEmployee(employee._id)"
            ></a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no Employees.. Lets add one now
      <br />
      <br />
      <router-link v-bind:to="{ name: 'EmployeeAdd' }" class="add_post_link">Add Employee</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "Employees",
  components: {},
  data() {
    return {
      Employees: [],
      search: ""
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      const response = await PostsService.fetchEmployees();
      this.Employees = response.data.employees;
      
      for(let i=0;i<(this.Employees).length;i++){
        var dt=new Date(this.Employees[i].dob);
        
        this.Employees[i].dob=dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
      }
    },
    async deleteEmployee(id) {
      this.$buefy.toast.open({
                    duration: 5000,
                    message: 'A employee is leaving the company',
                    type: 'is-danger',
                    position: 'is-top',
                });
      await PostsService.deleteEmployee(id);
      this.getEmployees();
    },
    filteredEmployee() {
      if (this.search === "") {
        this.employees = this.getEmployees();
      } else {
        this.Employees = this.Employees.filter(Employee => {
          return Employee.name.match(this.search.toUpperCase());
        });
      }
    }
  },
  filters:{
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
}
</script>
<style type="text/css" scoped>
.input,
.taginput .taginput-container.is-focusable,
.textarea {
  width: 150px;
}

table {
  margin-top: 20px;
}
.table-wrap {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  /* padding: 10px 80px; */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.leftSearch {
  margin-left: -830px;
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