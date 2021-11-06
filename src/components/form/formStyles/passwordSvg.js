import styled from 'styled-components'
import openEyeSvg from '../../../svg/eye.svg'
import closedEyeSvg from '../../../svg/eye-blocked.svg'

const Svg = styled.div`
  position: absolute;
  top: 7px;
  right: 18px;
  width: 24px;
  height: 24px;
  color: var(--text-color);

  background-size: cover;
  background-image: url(${(props) =>
    props.state === 'open' ? openEyeSvg : closedEyeSvg});

  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 27px;
  }
`
export default Svg
