import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../styles/userInfo.scss'

function UserInfo({ isAuthenticated, username }) {
  const userName = username || localStorage.getItem('username')
  return (
    <div className="user-info">
      {isAuthenticated
        ? <div>
          <div className="greeting">{`Welcome, ${userName}!`}</div>
          <div className="account">Your account: $6969</div>
        </div>
        : <div>
          <div className="greeting">{`Hi, ${userName}!`}</div>
          <div className="account">Please Login</div>
        </div>}
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

