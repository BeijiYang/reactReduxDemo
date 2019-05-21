import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../actions/types'

const initialState = {
  showNotification: false,
  notificationText: ''
}

const notification = (state = initialState, { type, payload }) => {
  switch (type) {

    case SHOW_NOTIFICATION:
      return {
        ...state,
        showNotification: true,
        notificationText: payload
      }

    case CLOSE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
        notificationText: ''
      }

    default:
      return state
  }
}

export default notification