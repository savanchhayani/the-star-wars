import {
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILED,
  SEARCH_PLANETS_SERIES
} from "../constants/actionsTypes";
import { SOMETHING_WENT_WRONG } from "../constants/messages";
import { getRankedPlanets } from "../selectors/lists";

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  searchedSeriesText: '',
  lists: [],
};

const lists = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PLANETS_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FETCH_PLANETS_SUCCESS: {
      const newLists = getRankedPlanets(action.payload); 
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        lists: newLists,
      }
    }

    case FETCH_PLANETS_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: SOMETHING_WENT_WRONG,
      }
    }

    case SEARCH_PLANETS_SERIES: {
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
