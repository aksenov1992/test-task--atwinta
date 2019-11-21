import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app')


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({path: '/', query: {redirect: to.fullPath}})
    } else {
      next()
    }
  } else if (to.meta.guest) {
    if (!token) {
      next();
    } else {
      next({ name: 'profile' });
    }
  }

})
