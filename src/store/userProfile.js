import { customAxios } from  '@/utils/customAxios.js'


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
    changeData(state, data) {
      state.profile = data
    }

  },
  actions: {
    getUserProfile ({commit}) {
      customAxios.get('/user')
        .then(response => {
          commit('changeData', response.data)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    postUserProfile ({state}) {
      customAxios.post('/user', {
        "show_name": state.profile.name,
        "about": state.profile.about,
        "github": state.profile.github,
        "city": state.profile.city,
        "is_finished": state.profile.is_finished,
        "telegram": state.profile.telegram,
        "phone": state.profile.phone,
        "birthday": state.profile.birthday
      })
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response.data)
        })
    },
    LOGOUT: () => {
      return new Promise((resolve) => {
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
}