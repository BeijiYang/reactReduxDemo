import { FILTER_LIST, UPDATE_RESULT_STATE } from '../actions/types'

export const filterList = str => dispatch => dispatch({
  type: FILTER_LIST,
  payload: str
})

export const updateResultState = () => dispatch => dispatch({
  type: UPDATE_RESULT_STATE,
})
