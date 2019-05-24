import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from '../components/Switch'

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
    const { state: { status, disabled }, checkBox } = this
    if (disabled) return
    this.setState({ status: !status })
    checkBox.current.classList.toggle('unchecked')
    this.props.onSwitch(status) // 今日心得 这个 status 怎么用
    // 如果是 点击一下 就执行一个确定的事情 如 执行加载下一页的函数 那 button 就足够了
    // 这种 switch 组件，与 button 的区别在于，有一个内部的是否 checked 的状态。如何用这个状态？
    // 这里正是一个好用法：确定是否显示采用无限加载的方案。要完成这个，需要一个函数来修改store中 isInfinityScroll 的布尔值，而函数的参数来表示是或否。
    // switch 的值正好可以作为 cb 函数的参数。
    // 当然，也可以用 button + toggle 函数的方案。
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