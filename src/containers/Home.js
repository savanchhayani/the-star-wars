import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";

import { searchPlanets } from "../actions/planets";

const mapState = (state) => ({
  isFetching: state.lists.isFetching,
  isFetched: state.lists.isFetched,
});

const mapStateToDispatch = dispatch =>
  bindActionCreators(
    {
      searchPlanets,
    },
    dispatch
  );

export default connect(
  mapState,
  mapStateToDispatch
)(Home);
