import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../title'
import Text from '../formStyles/text'
import Link from '../formStyles/link'
import routes from '../../../routes/routes'

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  padding: 32px;

  border: none;
  border-radius: 24px 24px 0px 0px;
  background-color: var(--main-bg);

  @media screen and (min-width: 768px) {
    padding: 264px 96px 620px;
    border-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 560px;
    height: 1024px;
    margin-left: auto;
  }
`

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
