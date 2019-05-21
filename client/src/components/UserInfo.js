import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/userInfo.scss'

function UserInfo({ isAuthenticated, username }) {
  return (
    <div className="user-info">
      {isAuthenticated
        ? <div>
          <div className="greeting">{`Welcome ${username}`}</div>
          <div className="account">Your account: $6969</div>
        </div>
        : <div className="greeting" >Please Login</div >}
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

