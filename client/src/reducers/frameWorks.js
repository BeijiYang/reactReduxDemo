import { FILTER_LIST } from '../actions/types'
import items from '../items'

const getFilteredList = str => {
  const inputStr = str.trim().toLowerCase()
  // if (!inputStr) return
  const includesInput = str => str.toLowerCase().includes(inputStr)
  const filteredList = items.filter(({ title, description }) => includesInput(title) || includesInput(description))
  return filteredList
}


const initialState = {
  itemsToShow: [...items]
}

const frameWorks = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_LIST:
      const filteredList = getFilteredList(payload)
      return {
        itemsToShow: filteredList
      }

    default:
      return state
  }
}

export default frameWorks