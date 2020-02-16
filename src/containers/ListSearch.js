import { connect } from 'react-redux';
import Search from "../components/Search";
import { getSearchedSeries } from '../selectors/lists';
import { searchWebSeries } from '../actions/webSeries';

const mapState = (state) => ({
  value: getSearchedSeries(state),
});

const mapDispatch = (dispatch) => ({
  onChange: (e) => { dispatch(searchWebSeries(e.target.value)); },
});

export default connect(mapState, mapDispatch)(Search);
