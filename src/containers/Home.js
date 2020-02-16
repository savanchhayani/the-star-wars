import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";

import { fetchWebSeriesRequested } from "../actions/webSeries";
import { getFilteredLists } from "../selectors/lists";

const mapState = (state) => ({
  isFetching: state.lists.isFetching,
  isFetched: state.lists.isFetched,
  lists: getFilteredLists(state),
});

const mapStateToDispatch = dispatch =>
  bindActionCreators(
    {
      fetchWebSeriesRequested
    },
    dispatch
  );

export default connect(
  mapState,
  mapStateToDispatch
)(Home);
