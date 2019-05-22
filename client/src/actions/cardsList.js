import { UPDATE_CARDS, UPDATE_SCROLL_TOP, UPDATE_CUR_PAGE_INDEX, UPDATE_CUR_PAGE_FOR_MOBILE, UPDATE_CUR_PAGE_FOR_WEB } from './types'
import axios from 'axios'

const CARDS_NUM_PER_PAGE = 12
const url = 'http://localhost:3001/companies'

const fetcher = async pageIndex =>
  await axios.post(url, { pageIndex, cardsNumPerPage: CARDS_NUM_PER_PAGE })
    .then(res => res.data)
    .catch(err => err)

const updateCurPageForMobile = () => ({
  type: UPDATE_CUR_PAGE_FOR_MOBILE,
})

const updateCurPageForWeb = (data) => ({
  type: UPDATE_CUR_PAGE_FOR_WEB,
  payload: data
})

const updateCurPageIndex = (newIndex) => ({
  type: UPDATE_CUR_PAGE_INDEX,
  payload: newIndex
})

const updateCards = data => ({
  type: UPDATE_CARDS,
  payload: data
})

const nextPageForMobile = (pageIndex = 0) => async dispatch => {
  const data = await fetcher(pageIndex)
  const actions = [
    updateCards(data),
    updateCurPageIndex(pageIndex),
    updateCurPageForMobile()
  ]
  dispatch(actions)
}

const calculateFromCards = (pageIndex, savedCards) => {
  const start = pageIndex * CARDS_NUM_PER_PAGE
  const end = (pageIndex + 1) * CARDS_NUM_PER_PAGE
  const companies = savedCards.slice(start, end)
  return { companies }
}

const nextPageForWeb = (pageIndex = 0) => async (dispatch, getState) => {
  const { cardsList: { cards } } = getState()
  const savedPageNum = cards.length / CARDS_NUM_PER_PAGE
  const needToFetch = pageIndex === savedPageNum

  const data = needToFetch ? await fetcher(pageIndex) : calculateFromCards(pageIndex, cards)
  const actions = [
    updateCurPageIndex(pageIndex),
    updateCurPageForWeb(data)
  ]
  if (needToFetch) actions.unshift(updateCards(data))

  dispatch(actions)
}

const updateScrollTop = newScrollTop => ({
  type: UPDATE_SCROLL_TOP,
  payload: newScrollTop
})

export { nextPageForMobile, nextPageForWeb, updateScrollTop }