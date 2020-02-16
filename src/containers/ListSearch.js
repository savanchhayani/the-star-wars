import { connect } from 'react-redux';
import Search from "../components/Search";
import { getSearchedSeries } from '../selectors/lists';
import { searchPlanets } from '../actions/planets';

const mapState = (state) => ({
  value: getSearchedSeries(state),
});

const mapDispatch = (dispatch) => ({
  onChange: (e) => { dispatch(searchPlanets(e.target.value)); },
});

export default connect(mapState, mapDispatch)(Search);
