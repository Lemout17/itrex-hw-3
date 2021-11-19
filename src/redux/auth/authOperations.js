import axios from 'axios'
import authActions from './authActions'

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest())
  dispatch(authActions.getUserProfileRequest())

  try {
    const { data } = await axios.post('/api/auth/login', credentials)

    token.set(data.access_token)

    dispatch(authActions.loginSuccess(data))

    const response = await axios.get('/api/auth/profile')
    console.log('userProfile', response.data)

    dispatch(authActions.getUserProfileSuccess(response.data))
  } catch (error) {
    dispatch(authActions.loginError(error.message))
    dispatch(authActions.getUserProfileError(error.message))
  }
}

export default {
  logIn,
}
