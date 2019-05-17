import React from 'react'
import PropTypes from 'prop-types'

function Card({ title, description }) {
  return (
    <div>
      <div className="title">{title}</div>
      <br />
      <div className="description">{description}</div>
      <hr />
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card

