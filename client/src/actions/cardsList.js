import { FETCH_CARDS } from './types'
import axios from 'axios'

const CARDS_NUM_PER_PAGE = 12
const url = 'http://localhost:3001/companies'

export const fetchCards = (pageIndex = 0) => async (dispatch, getState) => {
  const { cardsList: { cards } } = getState()
  const savedPageNum = cards.filter(Boolean).length / CARDS_NUM_PER_PAGE
  if (pageIndex < savedPageNum) return

  const data = await axios.post(url, { pageIndex, cardsNumPerPage: CARDS_NUM_PER_PAGE }).then(res => res.data)
  dispatch({
    type: FETCH_CARDS,
    payload: data
  })
}