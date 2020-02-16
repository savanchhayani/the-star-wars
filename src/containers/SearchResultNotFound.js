import { connect } from 'react-redux';
import Message from '../components/Message'
import { getNoSearchResultMessage } from '../selectors/lists';

const mapState = (state) => ({
  message: getNoSearchResultMessage(state),
});

export default connect(mapState)(Message);
