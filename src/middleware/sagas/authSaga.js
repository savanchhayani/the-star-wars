import { takeLatest, call, put } from "redux-saga/effects";

import { USER_LOGIN_REQUESTED } from "../../constants/auth";
import AppPath from '../../routing/AppPath';
import { loginSuccess, loginFailed } from "../../actions/auth";
import { userLoginCall } from "../../transport/transport";
import { WRONG_CREDENTIALS } from "../../constants/messages";

/**
 * Used to display the error message for the auth failed.
 */
function* errorMessage () {
  alert(WRONG_CREDENTIALS);
  yield put(loginFailed());
}

/**
 * loginCall function handles the user login authentication API call.
 * redirects the page to planets page if authentication is success.
 * 
 * @param {ReduxAction} action
 */
function* loginCall(action) {
  const { username, password, history } = action.payload;
  const res = yield call(userLoginCall, username.trim());

  if(res.data && res.data.count === 1) {
    const [user] = res.data.results;

    if (user.birth_year.trim() === password.trim()) {
      yield put(loginSuccess());
      history.push(AppPath.lists);
    } else {
      yield errorMessage();
    }
  } else {
    yield errorMessage();
  }
}

export default function* authSaga() {
  yield takeLatest(USER_LOGIN_REQUESTED, loginCall);
}
