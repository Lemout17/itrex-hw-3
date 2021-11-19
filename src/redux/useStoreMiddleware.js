import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import userSelector from './user/userSelector'
import authSelectors from './auth/authSelectors'

import userActions from '../redux/user/userActions'
import authOperations from './auth/authOperations'

function useStoreMiddleware() {
  const dispatch = useDispatch()
  const addAppointment = useCallback(
    (data) => {
      dispatch(userActions.setDoctorsList(data))
    },
    [dispatch]
  )

  const loginUser = useCallback(
    (data) => {
      dispatch(authOperations.logIn(data))
    },
    [dispatch]
  )

  const appointments = useSelector(userSelector.getDoctorsList)

  const isLogged = useSelector(authSelectors.getIsAuthenticated)

  return {
    addAppointment,
    appointments,
    isLogged,
    loginUser,
  }
}

export default useStoreMiddleware
