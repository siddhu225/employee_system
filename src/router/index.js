import Vue from "vue";
import Router from "vue-router";
import EmployeeAdd from "@/components/EmployeeAdd";
import login from "@/components/login";
import Employees from "@/components/employees";
import EditEmployee from "@/components/EditEmployee";
import EmployeeProfile from "@/components/employeeprofile";
import ForgotPassword from "@/components/forgotpassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employees
    },
    {
      path: "/employee/add",
      name: "EmployeeAdd",
      component: EmployeeAdd
    },
    {
      path: "/employees/:id",
      name: "EditEmployee",
      component: EditEmployee
    },
    {
      path: "/employees/view/:userId",
      name: "EmployeeProfile",
      component: EmployeeProfile,
      props: true
    },
    {
      path: "/forgot/password",
      name: "ForgotPassword",
      component: ForgotPassword
    }
  ]
});
