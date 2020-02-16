import { connect } from 'react-redux';
import Login from '../components/Login';
import { updateUserCredentials, loginRequested } from '../actions/auth';
import { getUserCredentials } from '../selectors/auth';

const mapState = (state) => ({
  ...getUserCredentials(state),
});

const mapDispatch = (dispatch, ownProps) => {
  return {
    onLoginPressed: (data) => {
      dispatch(loginRequested({ ...data, history: ownProps.history }));
    },
    updateInputs: (e) => {
      const { name, value } = e.target;
      dispatch(updateUserCredentials({ name, value }));
    },
  };
};

export default connect(mapState, mapDispatch)(Login);
