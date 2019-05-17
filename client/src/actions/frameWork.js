import { FILTER_LIST } from '../actions/types'

export const filterList = str => dispatch => dispatch({
  type: FILTER_LIST,
  payload: str
})
