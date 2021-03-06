import PropTypes from 'prop-types'
import SectionWrapper from './section.styles'

const Section = (props) => {
  return <SectionWrapper {...props}>{props.children}</SectionWrapper>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
