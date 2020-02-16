import React, { Component } from 'react'
import Item from './Item';

export default class WebSeriesList extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="web-series-list--container">
        {lists.map(item => <Item key={`item-${item.email}`} item={item}/>)}
      </div>
    )
  }
}
