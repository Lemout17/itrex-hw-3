import styled from 'styled-components'
import arrowLeftSvg from '../../svg/angle-left-b.svg'

const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  ${(props) => props.restore && 'padding-left: 40px;'}
  ${(props) => props.doctor && 'margin-bottom: 0;'}

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    ${(props) => props.doctor && 'margin-bottom: 0;'}
  }
`
const TitleText = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--title-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
  }
`

const LinkSvg = styled.div`
  & a {
    position: absolute;
    top: 1px;
    left: 0;
    width: 24px;
    height: 24px;

    background-image: url(${arrowLeftSvg});
    background-repeat: no-repeat;
    cursor: pointer;
  }
`

export { TitleWrapper, TitleText, LinkSvg }
