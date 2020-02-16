import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { item: { name }} = this.props;
    return (
      <div className="planet__item_container">
        <div className="details">
          <span className="name">{name}</span>
        </div>
      </div>
    )
  }
}
