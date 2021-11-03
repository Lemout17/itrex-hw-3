import React from 'react'
import PropTypes from 'prop-types'
import s from './title.module.css'

const Title = ({ text }) => (
  <div className={s.title_wrapper}>
    <span className={s.title}>{text}</span>
  </div>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
