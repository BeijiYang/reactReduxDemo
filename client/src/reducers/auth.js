import { LOGIN, LOGOUT } from '../actions/types'

const initialState = {
  isAuthenticated: false
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
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