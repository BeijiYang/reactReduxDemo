import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/frameWork'
import * as types from '../actions/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('frameWork actions', () => {
  it('should create an action to filter list', () => {
    const input = 'str'
    const expectedAction = {
      type: types.FILTER_LIST,
      payload: input
    }
    const store = mockStore({ itemsToShow: [] })
    expect(store.dispatch(actions.filterList(input))).toEqual(expectedAction)
  })

  it('should create an action to update result state', () => {
    const expectedAction = {
      type: types.UPDATE_RESULT_STATE,
    }
    expect(actions.updateResultState()).toEqual(expectedAction)
  })
})