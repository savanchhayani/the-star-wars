import { takeLatest, call, put, fork } from "redux-saga/effects";
import { SEARCH_PLANETS_SERIES } from "../../constants/actionsTypes";
import { fetchStarWarsPlanetsCall } from "../../transport/transport";
import { fetchPlanetsSuccess, fetchPlanetsRequested } from "../../actions/planets";
import authSaga from "./authSaga";

/**
 * Calls the planets search API.
 * @param {ReduxAction} action
 */
function* fetchPlanets(action) {
  yield put(fetchPlanetsRequested());
  const res = yield call(fetchStarWarsPlanetsCall, action.payload);

  if (res.status === 200) {
    yield put(fetchPlanetsSuccess(res.data.results));
  }
}

export default function* rootSaga() {
  yield takeLatest(SEARCH_PLANETS_SERIES, fetchPlanets);
  yield fork(authSaga);
} 
