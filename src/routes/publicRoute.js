import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import useStoreMiddleware from '../redux/useStoreMiddleware'

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const { isLogged } = useStoreMiddleware()

  return (
    <Route {...routeProps}>
      {isLogged && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  )
}

PublicRoute.defaultProps = {
  isAuthenticated: false,
  children: null,
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.shape(),
}
