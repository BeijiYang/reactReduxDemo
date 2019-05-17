import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterList, updateResultState } from '../actions/frameWork'
import Card from "../components/Card"

class FrameWorks extends Component {

  static protoType = {
    itemsToShow: PropTypes.array.isRequired,
    filterList: PropTypes.func.isRequired,
  }

  handleChange = e => {
    const { target: { value } } = e
    const { props: { filterList, updateResultState } } = this
    filterList(value)
    updateResultState()
  }

  getList = items => items.map(item => <Card key={item.title} {...item} />)

  render() {
    const { props: { itemsToShow, resultState }, getList } = this

    const list = getList(itemsToShow)
    return (
      <div>
        <input
          type="search"
          placeholder="input to search"
          onChange={this.handleChange}
        />
        {resultState}
        {list}
      </div>
    )
  }
}

const mapStateToProps = ({ frameWorks: { itemsToShow, resultState } }) => ({
  itemsToShow,
  resultState
})

export default connect(mapStateToProps, { filterList, updateResultState })(FrameWorks)