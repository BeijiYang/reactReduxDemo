import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Button from '../components/CustomButton'
import '../styles/login.scss'
import '../styles/form.scss'
// todo: 抽出个纯展示的 presentional component
const LogIn = ({ login }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (<div className="login">
    <div className="form">
      <div className="form-line">
        <div className="form-key">username</div>
        <input
          type="text"
          onChange={({ target: { value } }) => setUsername(value)}
        />
      </div>
      <div className="form-line">
        <div className="form-key">password</div>
        <input
          type="password"
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </div>
      <Button
        color="primary"
        onClick={() => login(username, password)}
      >
        login
      </Button>
    </div>
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
