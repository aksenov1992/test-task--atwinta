import Vue from 'vue'
import Vuex from 'vuex'

import login from "@/store/login";
import userProfile from "@/store/userProfile";
import cardEmployee from "@/store/cardEmployee";
import profileEmployee from "@/store/profileEmployee";

Vue.use(Vuex)
Vue.config.devtools = true



export default new Vuex.Store ({
  state: {},
  mutations: {},
  actions: {},
  modules: {login, userProfile, cardEmployee, profileEmployee}
})