import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from '../App'

configure({ adapter: new Adapter() })
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ itemsToShow: [] })

describe('App', () => {
  it('renders without crashing', () => {
    const wraper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
  it('renders 2 routes', () => { })

  it('home page renders HomeTitle', () => { })

  it('frameWorks page renders input and cards', () => { })
})

