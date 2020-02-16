import { connect } from 'react-redux';
import WebSeriesList from '../components/WebSeriesList';
import { getFilteredLists } from '../selectors/lists';

const mapState = (state) => ({
  lists: getFilteredLists(state),
});

export default connect(mapState)(WebSeriesList);
