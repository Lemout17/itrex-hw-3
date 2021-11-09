import { NavLink } from 'react-router-dom'
import Container from './styles'
import Title from '../../title'
import Text from '../formStyles/text'
import Link from '../formStyles/link'
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
