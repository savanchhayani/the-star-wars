import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Logout from "../components/Logout";
import { logout } from '../actions/auth';

const mapDispatch = (dispatch) => 
  bindActionCreators(
    {
      logout,
    },
    dispatch,
  );
export default connect(null, mapDispatch)(Logout);
