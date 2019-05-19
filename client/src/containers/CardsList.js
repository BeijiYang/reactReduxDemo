import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardsList'
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
    this.props.fetchCards()
  }

  loadNextPage = () => {
    let { props: { curPageIndex, fetchCards } } = this
    fetchCards(++curPageIndex)
  }

  getCards = cards => cards && cards.map(
    card => card
      ? <Card key={card.id} {...card} />
      : <LoadingCard />
  )

  render() {
    const { props: { cards }, getCards } = this

    const cardList = getCards(cards)
    return (
      <div className="cards-list">
        {cardList}
        <Button
          handleClick={this.loadNextPage}
          disabled={false}>Next Page</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ cardsList: { cards, curPageIndex } }) => ({
  cards,
  curPageIndex
})

export default connect(mapStateToProps, { fetchCards })(CardsList)