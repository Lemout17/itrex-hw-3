import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { TitleWrapper, TitleText, LinkSvg } from './title.styled'

import routes from '../../routes/routes'

const Title = (props) => (
  <>
    {props.restore ? (
      <TitleWrapper restore>
        <TitleText>
          <LinkSvg>
            <NavLink exact to={routes.signinPage}></NavLink>
          </LinkSvg>
          {props.text}
        </TitleText>
      </TitleWrapper>
    ) : (
      <TitleWrapper {...props}>
        <TitleText>{props.text}</TitleText>
      </TitleWrapper>
    )}
  </>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
