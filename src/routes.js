import VueRouter from 'vue-router';

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/Login'),

    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/pages/Employees'),

    },
    {
      path: '/employees/:id',
      name: 'employeesProfile',
      component: () => import('@/components/ProfileEmployee')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/Profile')
    }
  ]
})

