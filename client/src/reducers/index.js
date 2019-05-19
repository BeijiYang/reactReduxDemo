import { combineReducers } from 'redux'
import frameWorks from './frameWorks'
import cardsList from './cardsList'


const rootReducer = combineReducers({
  frameWorks,
  cardsList
})

export default rootReducer