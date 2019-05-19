import { FILTER_LIST, UPDATE_RESULT_STATE } from '../actions/types'

const filterList = str => ({
  type: FILTER_LIST,
  payload: str
})

const updateResultState = () => ({
  type: UPDATE_RESULT_STATE,
})

export { filterList, updateResultState } 
