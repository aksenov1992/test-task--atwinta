import Vue from 'vue'
import Vuex from 'vuex'

import login from "@/store/login";
import userProfile from "@/store/userProfile";

Vue.use(Vuex)



export default new Vuex.Store ({
  state: {},
  mutations: {},
  actions: {},
  modules: {login, userProfile}
})