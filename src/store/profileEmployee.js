import axios from 'axios'
let token = localStorage.getItem('token')

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
      axios.get('http://test.atwinta.ru/api/v1/workers/'+ payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
        .then(response => {
          this.state.profileEmployee = response.data
        })
    }
    }
  }
