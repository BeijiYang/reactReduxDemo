import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Button from '../components/CustomButton'
import '../styles/login.scss'

const LogIn = ({ login }) => (
  <div className="login">
    <Button
      color="primary"
      onClick={login}
    >
      login
      </Button>
  </div>
)

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { login })(LogIn)
