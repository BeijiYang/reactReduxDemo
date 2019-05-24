import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'
import rootReducer from './reducers/'

const initialState = {}

const multiActionMiddleware = store => next => action => {
  if (!Array.isArray(action)) return next(action)
  return action.map(a => store.dispatch(a))
}

const middleware = [thunk, multiActionMiddleware]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
