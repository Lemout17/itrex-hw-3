import PropTypes from 'prop-types'
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

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-left: 208px;
    background-image: url(${imgTablet});
    background-position: left;
    background-size: cover;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgDesktop});
  }
`

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
