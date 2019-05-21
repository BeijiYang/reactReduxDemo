import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'
import Form from '../components/Form'
import '../styles/login.scss'

const SignUp = ({ signup }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    if (!username || !password) return
    signup(username, password)
  }

  return <Form
    buttonText='SignUp'
    setUsername={setUsername}
    setPassword={setPassword}
    submit={submit}
    subText='Already get an account?'
    subLinkText='login'
    subLink='login'
  />
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { signup })(SignUp)
