import React from 'react'
import PropTypes from 'prop-types'
import '../styles/list-item.scss'

function ListItem({ title, description }) {
  return (
    <div className="list-item">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ListItem

