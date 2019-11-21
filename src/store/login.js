
import { customAxios } from  '@/utils/customAxios.js'

export default {
  state: {
    userData: {
      email: '',
      password: ''
    },
    rest: {
      restEmail: '',
      alert: false
    },
    rulesLog: {
      email: [
        { required: true, message: 'Пожалуйста введите email', trigger: 'blur' },
        { min: 5, message: 'Минимальная длинна 5 символа', trigger: 'blur' }
      ],
      password: [
        { required: true, message: 'Пожалуйста введите пароль', trigger: 'blur' },
        { min: 3, message: 'Минимальная длинна пароля 3 символа', trigger: 'blur' }
      ]
    }
  },
  getters: {
    loginData: state => {
      return state.userData
    },
    restData: state => {
      return state.rest
    },
    rulesData: state => {
      return state.rulesLog
    }
  },
  mutations: {
    flagAlert(state)  {
      state.rest.alert = true
    }
  },
  actions: {
    sendAuth: ({state}) => new Promise ((resolve, reject) => {
      customAxios.post('/auth/login', {
        "email": state.userData.email,
        "password": state.userData.password
      })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          resolve(response)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response.data.message)
          reject(error)
        })
      })
    },
    restorePass: ({state, commit}) => {
      customAxios.post('/auth/restore', {
        "email": state.rest.restEmail
      })
        .then(response => {
          if (response.status === 201) {
            commit('flagAlert')
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response.data.message)
        })
    }
  }


