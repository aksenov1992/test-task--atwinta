import axios from 'axios'

let token = localStorage.getItem('token')

export default {
  state: {
    profile: {}
  },
  getters: {
    dataProfile: state => {
      return state.profile
    }
  },
  mutations: {
    changeData: (state, data) => {
      state.profile = data
    }

  },
  actions: {
    getUserProfile ({commit}) {
      axios.get('http://test.atwinta.ru/api/v1/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          commit('changeData', response.data)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    postUserProfile (state) {
      let data = state.state.profile;

      axios.post('http://test.atwinta.ru/api/v1/user', {
        "show_name": data.name,
        "about": data.about,
        "github": data.github,
        "city": data.city,
        "is_finished": false,
        "telegram": data.telegram,
        "phone": data.phone,
        "birthday": data.birthday
      },
        {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response)
        })
    }
  }
}