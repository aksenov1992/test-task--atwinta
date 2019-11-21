import VueRouter from 'vue-router';

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/Login'),
      meta: { guest: true }

    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/pages/Employees'),
      meta: { requiresAuth: true}
    },
    {
      path: '/employees/:id',
      name: 'employeesProfile',
      component: () => import('@/components/ProfileEmployee'),
      meta: { requiresAuth: true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/Profile'),
      meta: { requiresAuth: true}
    }
  ]
})

