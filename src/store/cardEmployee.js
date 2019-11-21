import { customAxios } from  '@/utils/customAxios.js'


export default {
  state: {
    employee: {
      data: [
        {
          "id": 0,
          "login": "string",
          "name": "string",
          "email": "string",
          "image": "string"
        }
      ],
      "total": 0,
      "per_page": 0,
      "current_page": 0,
      "last_page": 0,
      "next_page_url": "string",
      "prev_page_url": "string",
      "from": 0,
      "to": 0
    }
  },
  mutations: {
    saveData(state, data) {
      state.employee = data
    }
  },
  actions: {
    getListEmployee({commit}, page) {
      customAxios.get('/workers', {
        params: {'page' : page},
      })
        .then(response => {
          commit('saveData', response.data)
        })
    }
  }
}