import axios from 'axios'

const BASE_URL = 'http://test.atwinta.ru/api/v1';

export default {
  state: {},
  actions: {
    SendAuth: (state, dataAuth) => {
      axios.post(BASE_URL + '/auth/login', {
        "email": dataAuth.email.value,
        "password": dataAuth.password.value
      })
        .then(response => {
          localStorage.setItem('token', response.data.token)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
        }
      }
    }
