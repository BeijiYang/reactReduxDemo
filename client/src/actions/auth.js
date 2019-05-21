import axios from 'axios'
import { showNotificaton } from './notification'
import { LOGIN, LOGOUT } from '../actions/types'

const serverUrl = 'http://localhost:3001'
const loginUrl = `${serverUrl}/login`
const signupUrl = `${serverUrl}/signup`

const loginSuccess = 'LOGIN_SUCCESS'
const signupSuccess = 'SIGNUP_SUCCESS'
const checkIf = successMsg => msg => successMsg === msg

const logIn = data => ({
  type: LOGIN,
  payload: data
})

const logOut = () => ({
  type: LOGOUT,
})

const handleError = () => { }

const login = (username, password) => async dispatch => {
  const resData = await axios.post(loginUrl, { username, password }).then(res => res.data).catch(err => err.response)
  const { msg, ...data } = resData
  if (checkIf(loginSuccess)(msg)) {
    const actions = [
      logIn(data),
      showNotificaton('login success')
    ]
    dispatch(actions)
  } else {
    handleError()
  }
}

const signup = (username, password) => async dispatch => {
  const resData = await axios.post(signupUrl, { username, password }).then(res => res.data).catch(err => err.response)
  const { msg, ...data } = resData
  if (checkIf(signupSuccess)(msg)) {
    const actions = [
      logIn(data),
      showNotificaton('signup success')
    ]
    dispatch(actions)
  } else {
    handleError()
  }
}

const logout = () => async dispatch => {
  const actions = [
    logOut(),
    showNotificaton('logout success')
  ]
  dispatch(actions)
}

export { login, signup, logout }
