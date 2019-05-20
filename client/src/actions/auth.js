import axios from 'axios'
import { LOGIN, LOGOUT } from '../actions/types'

const url = 'http://localhost:3001/login'

const loginSuccess = (msg) => msg === 'LOGIN_SUCCESS'

const setUser = dispatch => resData => dispatch({
  type: LOGIN,
  payload: resData
})

const handleError = () => { }

export const login = (username, password) => async dispatch => {
  const resData = await axios.post(url, { username, password }).then(res => res.data).catch(err => err.response)
  const { msg } = resData
  if (loginSuccess(msg)) {
    setUser(dispatch)(resData)
  } else {
    handleError()
  }
}


export const logout = () => ({
  type: LOGOUT
})