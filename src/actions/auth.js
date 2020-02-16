import {
  LOGIN_SUCCESS,
  LOG_OUT,
  UPDATE_USER_CREDENTIALS,
  USER_LOGIN_REQUESTED,
  LOGIN_FAILED,
} from '../constants/auth';

const loginRequested = (payload) => ({ type: USER_LOGIN_REQUESTED, payload });
const loginSuccess = () => ({ type: LOGIN_SUCCESS });
const loginFailed = () => ({ type: LOGIN_FAILED });

const logout = () => ({ type: LOG_OUT });

const updateUserCredentials = payload => ({
  type: UPDATE_USER_CREDENTIALS,
  payload,
});

export {
  loginRequested,
  loginSuccess,
  loginFailed,
  logout,
  updateUserCredentials,
}
