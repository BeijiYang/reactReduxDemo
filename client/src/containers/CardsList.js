import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCards, updateScrollTop } from '../actions/cardsList'
import Card from '../components/Card'
import LoadingCard from '../components/LoadingCard'
import Button from '../components/CustomButton'
import '../styles/cards-list.scss'

class CardsList extends Component {
  static propTypes = {
    fetchCards: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { props: { fetchCards, scrollTop } } = this
    fetchCards()
    setTimeout(() => window.scrollTo(0, scrollTop), 0)
  }


  componentWillUnmount() {
    const { props: { updateScrollTop } } = this
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    updateScrollTop(scrollTop)
  }

  loadNextPage = () => {
    let { props: { curPageIndex, fetchCards } } = this
    fetchCards(++curPageIndex)
  }

  getCards = cards => cards && cards.map(
    (card, index) => card
      ? <Card key={card.id} {...card} />
      : <LoadingCard key={index} />
  )

  render() {
    const { props: { cards }, getCards } = this

    const cardList = getCards(cards)
    return (
      <div className="cards-list">
        {cardList}
        <Button
          color="secondary"
          onClick={this.loadNextPage}
          disabled={false}>Next Page</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ cardsList: { cards, curPageIndex, scrollTop } }) => ({
  cards,
  curPageIndex,
  scrollTop
})

export default connect(mapStateToProps, { fetchCards, updateScrollTop })(CardsList)