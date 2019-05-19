import { FETCH_CARDS, UPDATE_SCROLL_TOP } from '../actions/types'

const CARDS_NUM_PER_PAGE = 12

const initialState = {
  cards: Array(CARDS_NUM_PER_PAGE).fill(null),
  curPageIndex: 0,
  totalPageNum: 0,
  scrollTop: 0,
}

const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS:
      const { companies, totalPageNum } = payload
      return {
        ...state,
        cards: [...state.cards.filter(Boolean), ...companies],
        curPageIndex: ++state.curPageIndex,
        totalPageNum
      }

    case UPDATE_SCROLL_TOP:
      return {
        ...state,
        scrollTop: payload
      }

    default:
      return state
  }
}

export default homeReducer