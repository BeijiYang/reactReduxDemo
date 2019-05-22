import { UPDATE_CARDS, UPDATE_CUR_PAGE_FOR_MOBILE, UPDATE_CUR_PAGE_FOR_WEB, UPDATE_CUR_PAGE_INDEX, UPDATE_SCROLL_TOP } from '../actions/types'

const CARDS_NUM_PER_PAGE = 12

const initialState = {
  cards: [],
  cardsOnCurPage: Array(CARDS_NUM_PER_PAGE).fill(null),
  curPageIndex: 0,
  totalPageNum: 0,
  scrollTop: 0,
}

const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CARDS:
      const { companies, totalPageNum } = payload
      return {
        ...state,
        cards: [...state.cards.filter(Boolean), ...companies],
        totalPageNum
      }

    case UPDATE_CUR_PAGE_INDEX:
      return {
        ...state,
        curPageIndex: payload,
      }

    case UPDATE_CUR_PAGE_FOR_MOBILE:
      return {
        ...state,
        cardsOnCurPage: state.cards
      }

    case UPDATE_CUR_PAGE_FOR_WEB:
      const { companies: companiesToShow } = payload
      return {
        ...state,
        cardsOnCurPage: companiesToShow
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