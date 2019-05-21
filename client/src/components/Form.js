import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../components/CustomButton'
import '../styles/form.scss'

function Form({ setUsername, setPassword, submit, buttonText, subText, subLinkText, subLink }) {
  return (
    <div className="login">
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
          onClick={submit}
        >
          {buttonText}
        </Button>
        <div className="sub">
          <div className="sub-text">{subText}</div>
          <Link className="sub-link-text" to={`/${subLink}`}>{subLinkText}</Link>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  subLinkText: PropTypes.string,
  subLink: PropTypes.string,
}

Form.defaultProps = {
  subText: '',
  subLinkText: '',
  subLink: '',
}


export default Form

