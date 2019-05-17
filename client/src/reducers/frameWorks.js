import { FILTER_LIST, UPDATE_RESULT_STATE } from '../actions/types'
import items from '../items'

const getFilteredList = str => {
  const inputStr = str.trim().toLowerCase()
  if (!inputStr) return items
  const includesInput = str => str.toLowerCase().includes(inputStr)
  const filteredList = items.filter(({ title, description }) => includesInput(title) || includesInput(description))
  return filteredList
}

const initialState = {
  itemsToShow: [...items],
  resultState: ''
}

const frameWorks = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_LIST:
      const filteredList = getFilteredList(payload)
      return {
        ...state,
        itemsToShow: filteredList
      }
    case UPDATE_RESULT_STATE:
      return {
        ...state,
        resultState: state.itemsToShow.length ? '' : 'Oops! No result found.'
      }
    default:
      return state
  }
}

export default frameWorks