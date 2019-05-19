import { combineReducers } from 'redux'
import frameWorks from './frameWorks'
import cardsList from './cardsList'
import auth from './auth'


const rootReducer = combineReducers({
  frameWorks,
  cardsList,
  auth
})

export default rootReducer