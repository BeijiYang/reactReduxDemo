import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import Notification from './Notification'
import '../styles/header.scss'

const Header = ({ isAuthenticated, logout }) => {
  const handleLogout = () => logout()
  return (
    <div className="header">
      <span>Header</span>
      {isAuthenticated
        ? <div className="header-auth">
          <FontAwesomeIcon
            onClick={handleLogout}
            icon={faSignOutAlt}
            size="xs"
            className="header-auth-icon"
          />
        </div>
        : <div className="header-auth">
          <Link to="/login">
            <FontAwesomeIcon
              icon={faSignInAlt}
              size="xs"
              className="header-auth-icon"
            />
          </Link>
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
