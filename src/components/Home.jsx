import React from "react";
import PlanetList from "../containers/PlanetList";
import ListSearch from "../containers/ListSearch";
import SearchResultNotFound from "../containers/SearchResultNotFound";
import Message from "./Message";
import Logout from "../containers/Logout";

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.searchPlanets('');
  }

  render() {
    const {
      isFetching,
      isFetched,
    } = this.props;

    return (
      <div className="home-container">
        { <ListSearch placeholder="search planets" /> }
          <Logout />
        { <Message className="header-title" message="Planets" /> }
        { <PlanetList isFetching={isFetching} /> }
        { isFetched && <SearchResultNotFound /> }
      </div>
    )
  }
}

export default Home;
