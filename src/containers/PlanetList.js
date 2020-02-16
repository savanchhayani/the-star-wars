import { connect } from 'react-redux';
import PlanetList from '../components/PlanetList';
import { getFilteredLists } from '../selectors/lists';

const mapState = (state) => ({
  lists: getFilteredLists(state),
});

export default connect(mapState)(PlanetList);
