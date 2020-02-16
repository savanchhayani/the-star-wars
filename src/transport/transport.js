import axios from "axios";
import {
  STAR_WARS_PLANETS,
  STAR_WARS_CHARACTER_SEARCH,
} from "../constants/apis";

/**
 * fetch API used to get the list of star wars planets.
 */
const fetchStarWarsPlanetsCall = (planetName) => {
  const url = `${STAR_WARS_PLANETS}=${planetName}`;
  return axios.get(url);
};

/**
 * search API used to authenticate the user by fetching the user info
 * by username.
 * @param {String} username - username
 */
const userLoginCall = (username) => {
  const url = `${STAR_WARS_CHARACTER_SEARCH}=${username}`;
  return axios.get(url);
};

export {
  fetchStarWarsPlanetsCall,
  userLoginCall
};
