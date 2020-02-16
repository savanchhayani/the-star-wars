import {
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILED,
  SEARCH_PLANETS_SERIES
} from "../constants/actionsTypes";

const fetchPlanetsRequested = () => ({
  type: FETCH_PLANETS_REQUESTED
});

const fetchPlanetsSuccess = payload => ({
  type: FETCH_PLANETS_SUCCESS,
  payload
});

const fetchPlanetsFailed = () => ({
  type: FETCH_PLANETS_FAILED,
});

const searchPlanets = (text) => ({
  type: SEARCH_PLANETS_SERIES,
  payload: text,
});

export {
  fetchPlanetsRequested,
  fetchPlanetsSuccess,
  fetchPlanetsFailed,
  searchPlanets
};
