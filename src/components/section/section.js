import React from 'react'
import PropTypes from 'prop-types'
import s from './section.module.css'

const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
