import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closeNotification } from '../actions/notification'
import '../styles/notification.scss'

const notificationTime = 3000

class Notification extends Component {
  static propTypes = {
    showNotification: PropTypes.bool.isRequired,
    notificationText: PropTypes.string.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const { props: { showNotification, closeNotification } } = this
    if (!showNotification && nextProps.showNotification) {
      setTimeout(closeNotification, notificationTime)
    }
  }

  render() {
    const { props: { showNotification, notificationText } } = this

    return (
      showNotification
        ?
        <div className="notification">
          {notificationText}
        </div>
        : null
    )
  }
}

const mapStateToProps = ({ notification: { showNotification, notificationText } }) => ({
  showNotification, notificationText
})

export default connect(mapStateToProps, { closeNotification })(Notification)

