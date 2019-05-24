import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from '../components/Switch'

/**
 * interface: this.props.onSwitch function
 */
class SwitchContainer extends Component {

  static propTypes = {
    onSwitch: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = {
      status: false,
      disabled: false,
    }
    this.checkBox = React.createRef()
  }

  switchCheckBox = () => {
    const {
      state: { status, disabled },
      props: { onSwitch },
      checkBox
    } = this
    if (disabled) return
    this.setState({ status: !status })
    checkBox.current.classList.toggle('unchecked')
    onSwitch(status)
  }

  handleKeyUp = ({ code }) => {
    if (code !== 'Space') return
    this.switchCheckBox()
  }

  render() {
    const { state: { status, disabled }, checkBox, switchCheckBox } = this

    return (
      <div className={disabled ? 'switch-wrap disabled' : 'switch-wrap'}>
        <Switch
          checked={status}
          disabled={disabled}
          handleFormChange={switchCheckBox}
          ref={checkBox}
        />
      </ div>
    )
  }
}

export default SwitchContainer