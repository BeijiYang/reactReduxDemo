import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import Notification from './Notification'
import '../styles/header.scss'

const signinForWeb = (
  <div className="signin-web">
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </div>
)

const signinForMobile = (
  <div className="signin-mobile">
    <Link to="/login">
      <FontAwesomeIcon
        icon={faSignInAlt}
        size="xs"
        className="header-auth-icon"
      />
    </Link>
  </div>
)

const logoutForMobile = logout => (
  <div className="logout-mobile">
    <FontAwesomeIcon
      onClick={logout}
      icon={faSignOutAlt}
      size="xs"
      className="header-auth-icon"
    />
  </div>
)

const logoutForWeb = logout => (
  <div className="logout-web" onClick={logout}>
    Logout
  </div>
)


const Header = ({ isAuthenticated, logout }) => {

  return (
    <div className="header">
      <span>Header</span>
      {isAuthenticated
        ? <div className="header-auth">
          {logoutForMobile(logout)}
          {logoutForWeb(logout)}
        </div>
        : <div className="header-auth">
          {signinForMobile}
          {signinForWeb}
        </div>
      }
      <Notification />
    </div>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { logout })(Header)
