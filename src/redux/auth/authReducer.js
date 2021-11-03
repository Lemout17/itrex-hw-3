import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import authActions from './authActions'

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.googleSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.googleError]: () => false,
  [authActions.getCurrentUserError]: () => false,
})

export default combineReducers({
  isAuthenticated,
})
