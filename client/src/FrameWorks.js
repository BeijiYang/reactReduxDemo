import React, { Component } from 'react'
import Card from "./Card"
import items from './items'

export default class FrameWorks extends Component {
  constructor() {
    super()
    this.state = {
      items: [...items],
      itemsToShow: [...items]
    }
  }

  handleChange = e => {
    const { state: { items } } = this
    const { target: { value } } = e
    const inputStr = value.trim().toLowerCase()
    const includesInput = str => str.toLowerCase().includes(inputStr)
    const filteredList = items.filter(({ title, description }) => includesInput(title) || includesInput(description))
    this.setState({ itemsToShow: filteredList })
  }

  getList = items => items.map(item => <Card key={item.title} {...item} />)

  render() {
    const { state: { itemsToShow }, getList } = this

    const list = getList(itemsToShow)
    return (
      <div>
        <input type="search" placeholder="input to search" onChange={this.handleChange} />
        {list}
      </div>
    )
  }
}
