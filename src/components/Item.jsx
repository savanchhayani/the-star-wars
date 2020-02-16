import React, { Component } from 'react'
import Planet from './planet/Planet';

export default class Item extends Component {
  render() {
    const { item: { name, rank }} = this.props;
    return (
      <div className="planet__item_container">
        <Planet size={rank * 10} />
        <div className="details">
          <span className="name">{name}</span>
        </div>
      </div>
    )
  }
}
