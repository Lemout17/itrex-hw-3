import { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
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

const RestoreView = lazy(() =>
  import('./view/restoreView' /* webpackChunkName: "restore-page" */)
)

const ConfirmView = lazy(() =>
  import('./view/confirmView' /* webpackChunkName: "confirm-page" */)
)

const DoctorView = lazy(() =>
  import('./view/doctorView' /* webpackChunkName: "doctor-page" */)
)

const PatientView = lazy(() =>
  import('./view/patientView' /* webpackChunkName: "patient-page" */)
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
            redirectTo={routes.patientPage}
            component={SignUpView}
          />
          <PublicRoute
            path={routes.signinPage}
            restricted
            redirectTo={routes.doctorPage}
            component={SignInView}
          />
          <PublicRoute
            path={routes.restorePage}
            restricted
            redirectTo={routes.signinPage}
            component={RestoreView}
          />
          <PublicRoute
            path={routes.confirmPage}
            restricted
            redirectTo={routes.signinPage}
            component={ConfirmView}
          />
          <PrivateRoute
            path={routes.doctorPage}
            component={DoctorView}
            redirectTo={routes.signinPage}
          />
          <PrivateRoute
            path={routes.patientPage}
            component={PatientView}
            redirectTo={routes.signinPage}
          />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
