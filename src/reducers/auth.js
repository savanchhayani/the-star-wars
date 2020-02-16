import {
  LOGIN_SUCCESS,
  LOG_OUT,
  UPDATE_USER_CREDENTIALS,
  USER_LOGIN_REQUESTED,
  LOGIN_FAILED,
} from '../constants/auth';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  username: '',
  password: '',
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER_CREDENTIALS: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      }
    }
    case USER_LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state;
  }
};

export default auth;
