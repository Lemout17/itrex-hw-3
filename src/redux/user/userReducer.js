import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import userActions from './userActions'

const doctorsList = createReducer([], {
  [userActions.setDoctorsList]: (state, { payload }) => [...state, payload],
})

export default combineReducers({
  doctorsList,
})
