import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function UserInfo({ isAuthenticated, username }) {
  return (
    <div>
      {isAuthenticated ? `Welcome ${username}` : 'Please Login'}
    </div>
  )
}

UserInfo.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated, username } }) => ({
  isAuthenticated, username
})

export default connect(mapStateToProps, {})(UserInfo)

