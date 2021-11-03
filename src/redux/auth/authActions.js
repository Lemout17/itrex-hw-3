import { createAction } from '@reduxjs/toolkit'

const registerRequest = createAction('auth/registerRequest')
const registerSuccess = createAction('auth/registerSuccess')
const registerError = createAction('auth/registerError')

const loginRequest = createAction('auth/loginRequest')
const loginSuccess = createAction('auth/loginSuccess')
const loginError = createAction('auth/loginError')

const googleRequest = createAction('auth/googleRequest')
const googleSuccess = createAction('auth/googleSuccess')
const googleError = createAction('auth/googleError')

const logoutRequest = createAction('auth/logoutRequest')
const logoutSuccess = createAction('auth/logoutSuccess')
const logoutError = createAction('auth/logoutError')

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest')
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess')
const getCurrentUserError = createAction('auth/getCurrentUserError')

const isModalShow = createAction('auth/isModalShow')

export default {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  googleRequest,
  googleSuccess,
  googleError,
  isModalShow,
}
