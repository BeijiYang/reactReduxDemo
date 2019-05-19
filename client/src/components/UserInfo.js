import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function UserInfo({ isAuthenticated }) {
  return (
    <div>
      {isAuthenticated ? 'Welcome' : 'Please Login'}
    </div>
  )
}

UserInfo.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, {})(UserInfo)

