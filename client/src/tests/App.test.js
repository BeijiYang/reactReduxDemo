import React from 'react'
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from '../App'
import items from '../components/items'

configure({ adapter: new Adapter() })
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ itemsToShow: [] })

describe('App', () => {
  it('renders 2 routes, home and frameWorks', () => {
    const wraper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wraper.find('[href="/"]')).toHaveLength(1)
    expect(wraper.find('[href="/frameWorks"]')).toHaveLength(1)
  })

  it('home page renders HomeTitle', () => {
    const homeTitle = 'Home'
    const wraper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wraper.contains(homeTitle)).toBe(true)
  })

  it('frameWorks page renders input and cards', () => {
    const wraper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    // click link
    wraper.find('[href="/frameWorks"]').simulate('click', { button: 0 })
    // render input and cards
    expect(wraper.find('input')).toHaveLength(1)
    expect(wraper.find('ListItem')).toHaveLength(items.length)
  })
})

