import axios from 'axios'

let token = localStorage.getItem('token')

export default {
  state: {
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
  },
  getters: {

  },
  mutations: {
    saveData(state, data) {
      this.state.cardEmployee = data
    }
  },
  actions: {
    getListEmployee(context, page) {
      axios.get('http://test.atwinta.ru/api/v1/workers', {
        params: {'page' : page},
        headers: {
          'Authorization': `Bearer ${token}`,

        }
      })
        .then(response => {
          context.commit('saveData', response.data)
        })
    }
  }
}