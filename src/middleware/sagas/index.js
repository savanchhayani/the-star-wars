import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_WEB_SERIES_REQUESTED } from "../../constants/actionsTypes";
import { fetchWebSeriesCall } from "../../transport/transport";
import { fetchWebSeriesSuccess } from "../../actions/webSeries";

function* fetchWebSeries() {
  const res = yield call(fetchWebSeriesCall);

  if (res.status === 200) {
    yield put(fetchWebSeriesSuccess(res.data.data));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_WEB_SERIES_REQUESTED, fetchWebSeries);
}
