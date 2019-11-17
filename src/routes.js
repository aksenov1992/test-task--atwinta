import VueRouter from 'vue-router';
import Login from "@/components/Login";
import Employees from "@/pages/Employees";
import Profile from "@/pages/Profile";

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,

    },
    {
      path: '/employees',
      component: Employees
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

