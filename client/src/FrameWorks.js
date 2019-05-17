import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterList } from './actions/frameWork'
import Card from "./Card"

class FrameWorks extends Component {

  static protoType = {
    itemsToShow: PropTypes.array.isRequired,
    filterList: PropTypes.func.isRequired,
  }

  handleChange = e => {
    const { target: { value } } = e
    this.props.filterList(value)
  }

  getList = items => items.map(item => <Card key={item.title} {...item} />)

  render() {
    const { props: { itemsToShow }, getList } = this

    const list = getList(itemsToShow)
    return (
      <div>
        <input
          type="search"
          placeholder="input to search"
          onChange={this.handleChange}
        />
        {list}
      </div>
    )
  }
}

const mapStateToProps = ({ frameWorks: { itemsToShow } }) => ({
  itemsToShow
})

export default connect(mapStateToProps, { filterList })(FrameWorks)