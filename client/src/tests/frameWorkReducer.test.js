import frameWorks from '../reducers/frameWorks'
import * as types from '../actions/types'
import items from '../components/items'

describe('frameWork reducer', () => {
  const initialState = {
    itemsToShow: [...items],
    resultState: ''
  }

  it('should return the initial state', () => {
    expect(frameWorks(undefined, {})).toEqual(initialState)
  })

  it('should handle FILTER_LIST', () => {
    const reactOnly = [{
      title: "React",
      description:
        "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    }]
    expect(
      frameWorks(initialState, {
        type: types.FILTER_LIST,
        payload: 'react'
      })
    ).toEqual({
      itemsToShow: reactOnly,
      resultState: ''
    })
  })

  it('should handle UPDATE_RESULT_STATE', () => {
    const noResultState = 'Oops! No result found.'
    expect(
      frameWorks({
        itemsToShow: [],
        resultState: ''
      }, {
          type: types.UPDATE_RESULT_STATE,
        })
    ).toEqual({
      itemsToShow: [],
      resultState: noResultState
    })
  })
})