import { combineReducers } from 'redux'
import frameWorks from './frameWorks'
import home from './home'


const rootReducer = combineReducers({
  frameWorks,
  home
})

export default rootReducer