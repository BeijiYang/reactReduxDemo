import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Form from './Form'
import '../styles/login.scss'

const LogIn = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => { login(username, password) }

  return <Form
    buttonText='Login'
    setUsername={setUsername}
    setPassword={setPassword}
    submit={submit}
    subText='Not Registered?'
    subLinkText='Create an account'
  />
}

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { login })(LogIn)
