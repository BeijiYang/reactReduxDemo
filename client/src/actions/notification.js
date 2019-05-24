import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/types'

const showNotificaton = text => ({
  type: SHOW_NOTIFICATION,
  payload: text
})

const closeNotification = () => ({
  type: CLOSE_NOTIFICATION,
})

const showSettingNotification = status => async dispatch => {
  const text = status ? 'use NEXT PAGE button' : 'use infinite scroll'
  dispatch(showNotificaton(text))
}

export { showNotificaton, closeNotification, showSettingNotification }