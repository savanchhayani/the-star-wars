import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import Item from "./Item";
import AppModel from "./Model";

export default class PlanetList extends Component {
  render() {
    const { lists, isFetching } = this.props;
    const classNames = `planet-list--container ${isFetching ? "flex" : ""}`;
    return lists.length ? (
      <div className={classNames}>
        {isFetching ? (
          <Spinner animation="border" />
        ) : (
          lists.map(item => {
            return (
              <AppModel
                item={item}
                icon={<Item key={`item-${item.name}`} item={item} />}
              />
            );
          })
        )}
      </div>
    ) : (
      <React.Fragment />
    );
  }
}
