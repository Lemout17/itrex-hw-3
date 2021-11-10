import { NavLink } from 'react-router-dom'

import Container from './confirm.styles'
import Title from '../../title/title'
import { Text, Link } from '../styles'

import routes from '../../../routes/routes'

const ConfirmFrom = () => {
  return (
    <Container>
      <Title text="Restore password" restore />
      <Text>
        An email has been sent to
        <Link confirm>
          <NavLink exact to={routes.signinPage}>
            example@exam.com
          </NavLink>
        </Link>
        Check your inbox, and click the reset link provided.
      </Text>
    </Container>
  )
}

export default ConfirmFrom
