import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { nextPageForMobile, nextPageForWeb, updateScrollTop, switchNextPageButton } from '../actions/cardsList'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
import Button from '../components/CustomButton'
import Switch from './SwitchContainer'
import '../styles/cards-list.scss'

class CardsList extends Component {
  static propTypes = {
    nextPageForMobile: PropTypes.func.isRequired,
    nextPageForWeb: PropTypes.func.isRequired,
    updateScrollTop: PropTypes.func.isRequired,
    cardsOnCurPage: PropTypes.array.isRequired,
    curPageIndex: PropTypes.number.isRequired,
    totalPageNum: PropTypes.number.isRequired,
    scrollTop: PropTypes.number.isRequired,
    showNextPageButton: PropTypes.bool.isRequired,
    switchNextPageButton: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { props: { scrollTop, nextPageForMobile } } = this
    nextPageForMobile()
    setTimeout(() => window.scrollTo(0, scrollTop), 0)
  }

  componentWillReceiveProps(nextProps) {
    const { showNextPageButton } = nextProps
    if (!showNextPageButton) {
      // use infinite scroll
      window.addEventListener('scroll', this.handleOnScroll)
    } else {
      window.removeEventListener('scroll', this.handleOnScroll)
    }
  }

  componentWillUnmount() {
    const { props: { updateScrollTop } } = this
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    updateScrollTop(scrollTop)
  }

  handleOnScroll = e => {
    const { target: { documentElement: { scrollHeight, scrollTop, clientHeight } } } = e
    const reachTheBottom = scrollTop + clientHeight === scrollHeight

    if (reachTheBottom) this.handleClichForMobile()
  }

  handleClichForMobile = () => {
    let { props: { curPageIndex, nextPageForMobile } } = this
    nextPageForMobile(++curPageIndex)
  }

  /**
   * @param direction {Number} 1 for next & -1 for previous
   */
  handleClickForWeb = (direction) => {
    let { props: { curPageIndex, nextPageForWeb } } = this
    nextPageForWeb(curPageIndex += direction)
    window.scrollTo(0, 0)
  }

  getCards = cards => cards && cards.map(
    (card, index) => card
      ? <Card key={card.id} {...card} />
      : <LoadingCard key={index} />
  )

  render() {
    const { props: { cardsOnCurPage, curPageIndex, totalPageNum, showNextPageButton, switchNextPageButton }, getCards } = this
    const cardList = getCards(cardsOnCurPage)
    return (
      <div className="cards-list">
        <div className="mobile-switch">
          <div>useNextButton</div>
          <Switch onSwitch={switchNextPageButton} />
        </div>
        {cardList}
        {showNextPageButton
          ? <div className="mobile">
            <Button
              color="secondary"
              onClick={this.handleClichForMobile}
              disabled={false}>Next Page</Button>
          </div>
          : null}
        <div className="web">
          <Button
            variant="text"
            color="primary"
            size='medium'
            onClick={() => this.handleClickForWeb(-1)}
            disabled={curPageIndex === 0}
          >
            {'<  Prev'}
          </Button>
          <label className="page-index">
            {`${curPageIndex + 1} / ${totalPageNum}`}
          </label>
          <Button
            variant="text"
            color="primary"
            size='medium'
            onClick={() => this.handleClickForWeb(1)}
            disabled={curPageIndex + 1 === totalPageNum}
          >
            {'Next  >'}
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cardsList: { cardsOnCurPage, curPageIndex, totalPageNum, scrollTop, showNextPageButton } }) => ({
  cardsOnCurPage,
  curPageIndex,
  totalPageNum,
  scrollTop,
  showNextPageButton
})

export default connect(mapStateToProps, { nextPageForMobile, nextPageForWeb, updateScrollTop, switchNextPageButton })(CardsList)