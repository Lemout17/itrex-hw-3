import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import authActions from './authActions'

const user = createReducer(
  {},
  {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.getUserProfileSuccess]: (_, { payload }) => ({
      ...payload,
    }),
    [authActions.logoutSuccess]: () => [],
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  }
)

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
  [authActions.logoutSuccess]: () => null,
})

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.getUserProfileError]: (_, { payload }) => payload,
})

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
  user,
  isAuthenticated,
  token,
  error,
})
