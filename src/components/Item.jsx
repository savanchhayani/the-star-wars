import React, { Component } from 'react'
import Avatar from './Avatar';

export default class Item extends Component {
  render() {
    const { item: { name, email, avatar }} = this.props;
    return (
      <div className="web_series__item_container">
        <Avatar src={avatar} />
        <div className="details">
          <span className="name">{name}</span>
          <span className="email">{email}</span>
        </div>
      </div>
    )
  }
}
