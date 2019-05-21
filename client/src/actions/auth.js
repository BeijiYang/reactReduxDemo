import axios from 'axios'
import { showNotificaton } from './notification'
import { LOGIN, LOGOUT } from '../actions/types'

const url = 'http://localhost:3001/login'

const loginSuccess = (msg) => msg === 'LOGIN_SUCCESS'

const logIn = data => ({
  type: LOGIN,
  payload: data
})

const logOut = () => ({
  type: LOGOUT,
})

const handleError = () => { }

export const login = (username, password) => async dispatch => {
  const resData = await axios.post(url, { username, password }).then(res => res.data).catch(err => err.response)
  const { msg, ...data } = resData
  if (loginSuccess(msg)) {
    const actions = [
      logIn(data),
      showNotificaton('login success')
    ]
    dispatch(actions)
  } else {
    handleError()
  }
}

export const logout = () => async dispatch => {
  const actions = [
    logOut(),
    showNotificaton('logout success')
  ]
  dispatch(actions)
}
