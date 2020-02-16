import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Item from './Item';

export default class PlanetList extends Component {
  render() {
    const { lists, isFetching } = this.props;
    return (
      <div className="planet-list--container">
        {isFetching
          ? <Spinner animation="border" />
          : lists.map(item => <Item key={`item-${item.name}`} item={item} />)}
      </div>
    )
  }
}
