import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import userSelector from './user/userSelector'
import authSelectors from './auth/authSelectors'

import userActions from '../redux/user/userActions'

function useStoreMiddleware() {
  const dispatch = useDispatch()
  const addAppointment = useCallback(
    (data) => {
      dispatch(userActions.setDoctorsList(data))
    },
    [dispatch]
  )

  const appointments = useSelector(userSelector.getDoctorsList)

  const isLogged = useSelector(authSelectors.getIsAuthenticated)

  return {
    addAppointment,
    appointments,
    isLogged,
  }
}

export default useStoreMiddleware
