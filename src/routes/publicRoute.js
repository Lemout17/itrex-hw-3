import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSelectors from '../redux/auth/authSelectors'

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
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
