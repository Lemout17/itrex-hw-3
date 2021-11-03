import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes/routes'

import SignUpView from './view/signUpView'

function App() {
  return (
    <>
      <Switch>
        <Route exact to={routes.signupPage} component={SignUpView} />
      </Switch>
    </>
  )
}

export default App
