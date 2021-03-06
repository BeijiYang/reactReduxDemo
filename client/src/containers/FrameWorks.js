import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterList, updateResultState } from '../actions/frameWork'
import ListItem from '../components/ListItem'
import '../styles/frameWorks.scss'

class FrameWorks extends Component {

  static protoType = {
    itemsToShow: PropTypes.array.isRequired,
    filterList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  handleChange = e => {
    const { target: { value } } = e
    const { props: { filterList, updateResultState } } = this
    filterList(value)
    updateResultState()
  }

  getList = items => items.map(item => <ListItem key={item.title} {...item} />)

  render() {
    const { props: { itemsToShow, resultState }, getList } = this

    const list = getList(itemsToShow)
    return (
      <div className="frame-works">
        <input
          type="search"
          placeholder="input to search"
          onChange={this.handleChange}
        />
        <div className="result-state">
          {resultState}
        </div>
        <div className="result-cards">
          {list}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ frameWorks: { itemsToShow, resultState } }) => ({
  itemsToShow,
  resultState
})

export default connect(mapStateToProps, { filterList, updateResultState })(FrameWorks)