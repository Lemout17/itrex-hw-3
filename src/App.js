import { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes/routes'

import SignUpView from './view/signUpView'
import SignInView from './view/signInView'
// import NotFound from './view/notFound'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.signupPage} component={SignUpView} />
        <Route path={routes.signinPage} component={SignInView} />
        <Redirect to={routes.signupPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </>
  )
}

export default App
