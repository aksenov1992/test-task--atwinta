import { customAxios } from  '@/utils/customAxios.js'


export default {
  state: {
    "id": 0,
    "login": "string",
    "name": "string",
    "email": "string",
    "image": "string",
    "about": "string",
    "type": "string",
    "github": "string",
    "worker": {
      "department": "string",
      "position": "string",
      "adopted_at": "string"
    }
  },
  mutations: {

  },
  actions: {
    loadProfileEmployee(state, payload) {
      customAxios.get('/workers/'+ payload)
        .then(response => {
          this.state.profileEmployee = response.data
        })
    }
  }
}
