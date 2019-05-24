import React from 'react'
import PropTypes from 'prop-types'
import '../styles/switch.scss'

const Switch = React.forwardRef(
  ({ disabled,
    checked,
    handleFormChange }, ref) => (
      <div
        className='switch'
        ref={ref}
      >
        <input
          type="checkbox"
          className={disabled ? 'checkbox disabled' : 'checkbox'}
          onChange={handleFormChange}
          checked={checked}
          disabled={disabled}
        />
      </div>
    )
)

Switch.propTypes = {
  handleFormChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}

export default Switch
