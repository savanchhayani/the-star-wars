// used below url to avoid cors error.
// https://cors-anywhere.herokuapp.com/ 
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/';
export const STAR_WARS_PLANETS = `${BASE_URL}planets/?search`;
export const STAR_WARS_CHARACTER_SEARCH = `${BASE_URL}people/?search`;
