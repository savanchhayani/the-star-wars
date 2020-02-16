
/**
 * @param {ReduxState} state
 * @returns {Object} - returns user credentials.
 *  - username, password, etc.
 */
const getUserCredentials = (state) => state.auth;

export {
  getUserCredentials,
}