import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import userActions from './userActions'

import data from '../../components/mainPatient/db.json'

const initialState = data

const patientsList = createReducer(initialState, {
  [userActions.setPatientsList]: (state, { payload }) => [...state, payload],
})

export default combineReducers({
  patientsList,
})
