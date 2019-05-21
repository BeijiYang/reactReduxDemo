import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/types'

const showNotificaton = text => ({
  type: SHOW_NOTIFICATION,
  payload: text
})

const closeNotification = () => ({
  type: CLOSE_NOTIFICATION,
})

export { showNotificaton, closeNotification }