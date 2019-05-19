import { FETCH_CARDS } from './types'
import axios from 'axios'

const CARDS_NUM_PER_PAGE = 12
const url = 'http://localhost:3001/companies'

export const fetchCards = (pageIndex = 0) => async (dispatch, getState) => {
  // 判断要不要发请求 pageIndex
  const { home: { cards } } = getState()
  const savedPageNum = cards.length / CARDS_NUM_PER_PAGE
  if (pageIndex < savedPageNum) return

  // 改接口常量名 CARDS_PER_PAGE
  const data = await axios.post(url, { pageIndex, cardsNumPerPage: CARDS_NUM_PER_PAGE }).then(res => res.data)
  dispatch({
    type: FETCH_CARDS,
    payload: data
  })
}