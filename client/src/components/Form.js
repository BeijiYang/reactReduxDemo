import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/CustomButton'
import '../styles/form.scss'

function Form({ setUsername, setPassword, submit, buttonText, subText, subLinkText }) {
  return (
    <div className="login">
      <div className="form">
        <div className="form-line">
          {/*如果需要扩展表单，产生多个 input, 可以传入数组[username, usersex, userId] 在本组件 map 产生多个 input */}
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
          <div className="sub-link-text">{subLinkText}</div>
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
}

Form.defaultProps = {
  subText: '',
  subLinkText: '',
}


export default Form

