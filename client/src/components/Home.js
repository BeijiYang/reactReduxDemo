import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCards } from '../actions/home'
import Card from './Card'
import LoadingCard from './LoadingCard'
import Button from './CustomButton'
import '../styles/home.scss'

class Home extends Component {
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

  getCards = cards => cards && cards.map(card => card ? <Card key={card.id} {...card} /> : <LoadingCard />)

  render() {
    const { props: { cards }, getCards } = this

    const cardList = getCards(cards)
    return (
      <div className="home">
        <h1>Home</h1>
        {cardList}
        <Button
          handleClick={this.loadNextPage}
          disabled={false}>Next Page</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ home: { cards, curPageIndex } }) => ({
  cards,
  curPageIndex
})

export default connect(mapStateToProps, { fetchCards })(Home)