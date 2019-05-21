import { combineReducers } from 'redux'
import frameWorks from './frameWorks'
import cardsList from './cardsList'
import auth from './auth'
import notification from './notification'


const rootReducer = combineReducers({
  frameWorks,
  cardsList,
  auth,
  notification
})

export default rootReducer