import React from 'react'
import PropTypes from 'prop-types'
import '../styles/card.scss'

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card

