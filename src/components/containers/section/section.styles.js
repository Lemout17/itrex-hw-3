import styled from 'styled-components'
import imgMobile from '../../../img/bg-mobile@x2.jpg'
import imgTablet from '../../../img/bg-tablet@x2.jpg'
import imgDesktop from '../../../img/bg-desktop@x2.jpg'

const SectionWrapper = styled.section`
  padding-top: 72px;
  background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;

  ${(props) => props.doctor && 'padding: 0;'}
  ${(props) => props.doctor && ' background-image:none;'}

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-left: 208px;
    background-image: url(${imgTablet});
    background-position: left;
    background-size: cover;

    ${(props) => props.doctor && 'padding: 0 64px 48px;'}
    ${(props) => props.doctor && ' background-image:none;'}
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgDesktop});

    ${(props) => props.doctor && 'padding: 0 64px 48px;'}
    ${(props) => props.doctor && ' background-image:none;'}
  }
`
export default SectionWrapper
