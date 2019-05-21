import { LOGIN, LOGOUT } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  userId: '',
  username: '',
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const { userId, username } = payload
      return {
        ...state,
        isAuthenticated: true,
        userId,
        username,
      }

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state
  }
}

export default auth