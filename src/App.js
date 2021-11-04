import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes/routes'

import PublicRoute from './routes/publicRoute'
import PrivateRoute from './routes/privateRoute'

import Loader from './components/preloader'

// import RestoreView from './view/restoreView'
// import ConfirmView from './view/confirmView'
// import NotFound from './view/notFound'

const SignUpView = lazy(() =>
  import('./view/signUpView' /* webpackChunkName: "signup-page" */)
)

const SignInView = lazy(() =>
  import('./view/signInView' /* webpackChunkName: "signin-page" */)
)

const DoctorView = lazy(() =>
  import('./view/doctorView' /* webpackChunkName: "doctor-page" */)
)

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            exact
            path={routes.signupPage}
            restricted
            redirectTo={routes.doctorPage}
            component={SignUpView}
          />
          <PublicRoute
            path={routes.signinPage}
            restricted
            redirectTo={routes.doctorPage}
            component={SignInView}
          />
          <PrivateRoute
            path={routes.doctorPage}
            component={DoctorView}
            redirectTo={routes.signinPage}
          />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
