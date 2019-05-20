import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Button from '../components/CustomButton'
import '../styles/login.scss'

const LogIn = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (<div className="login">
    <div className="form">
      <div className="from-line">
        <span>username</span>
        <input
          type="text"
          onChange={({ target: { value } }) => setUsername(value)}
        />
      </div>
      <div className="from-line">
        <span>password</span>
        <input
          type="number"
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </div>
    </div>
    <Button
      color="primary"
      onClick={() => login(username, password)}
    >
      login
      </Button>
  </div>)
}

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { login })(LogIn)
