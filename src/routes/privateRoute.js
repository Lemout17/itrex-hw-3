import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import useStoreMiddleware from '../redux/useStoreMiddleware'

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const { isLogged } = useStoreMiddleware()

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}

PrivateRoute.defaultProps = {
  isAuthenticated: false,
  children: null,
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.shape(),
}
