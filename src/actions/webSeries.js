import {
  FETCH_WEB_SERIES_REQUESTED,
  FETCH_WEB_SERIES_SUCCESS,
  FETCH_WEB_SERIES_FAILED,
  SEARCH_WEB_SERIES
} from "../constants/actionsTypes";

const fetchWebSeriesRequested = () => ({
  type: FETCH_WEB_SERIES_REQUESTED
});

const fetchWebSeriesSuccess = payload => ({
  type: FETCH_WEB_SERIES_SUCCESS,
  payload
});

const fetchWebSeriesFailed = () => ({
  type: FETCH_WEB_SERIES_FAILED,
});

const searchWebSeries = (text) => ({
  type: SEARCH_WEB_SERIES,
  payload: text,
});

export {
  fetchWebSeriesRequested,
  fetchWebSeriesSuccess,
  fetchWebSeriesFailed,
  searchWebSeries
};
