import { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import routes from './routes/routes'

import useStoreMiddleware from './redux/useStoreMiddleware'

import PublicRoute from './routes/publicRoute'
import PrivateRoute from './routes/privateRoute'

import Loader from './components/preloader/preloader'

const SignUpView = lazy(() =>
  import('./view/signUpView/signUpView' /* webpackChunkName: "signup-page" */)
)

const SignInView = lazy(() =>
  import('./view/signInView/signInView' /* webpackChunkName: "signin-page" */)
)

const RestoreView = lazy(() =>
  import(
    './view/restoreView/restoreView' /* webpackChunkName: "restore-page" */
  )
)

const ConfirmView = lazy(() =>
  import(
    './view/confirmView/confirmView' /* webpackChunkName: "confirm-page" */
  )
)

const DoctorView = lazy(() =>
  import('./view/doctorView/doctorView' /* webpackChunkName: "doctor-page" */)
)

const PatientView = lazy(() =>
  import(
    './view/patientView/patientView' /* webpackChunkName: "patient-page" */
  )
)

function App() {
  const { userProfile } = useStoreMiddleware()

  console.log('Render')

  if (!userProfile) {
    return <div />
  }

  const userPage =
    userProfile.role_name === 'Patient' ? routes.patientPage : routes.doctorPage

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
            redirectTo={userPage}
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
