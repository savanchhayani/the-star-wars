import {
  FETCH_WEB_SERIES_REQUESTED,
  FETCH_WEB_SERIES_SUCCESS,
  FETCH_WEB_SERIES_FAILED,
  SEARCH_WEB_SERIES
} from "../constants/actionsTypes";
import { SOMETHING_WENT_WRONG } from "../constants/messages";

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  searchedSeriesText: '',
  lists: [],
};

const lists = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEB_SERIES_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FETCH_WEB_SERIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        lists: action.payload,
      }
    }

    case FETCH_WEB_SERIES_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: SOMETHING_WENT_WRONG,
      }
    }

    case SEARCH_WEB_SERIES: {
      return {
        ...state,
        searchedSeriesText: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default lists;
