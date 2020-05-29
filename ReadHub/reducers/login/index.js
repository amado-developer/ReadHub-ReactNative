import {combineReducers} from 'redux';
import * as types from '../../types/logIn';
import jwtDecode from 'jwt-decode';

const token = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED: {
      return null;
    }
    case types.LOGIN_COMPLETED: {
      return action.payload.token;
    }
    case types.LOGIN_FAILED: {
      return null;
    }
  }
  return state;
};

const isLogingIn = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED: {
      return true;
    }
    case types.LOGIN_COMPLETED: {
      return false;
    }
    case types.LOGIN_FAILED: {
      return false;
    }
  }
  return state;
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED: {
      return null;
    }
    case types.LOGIN_COMPLETED: {
      return null;
    }
    case types.LOGIN_FAILED: {
      return action.payload.error;
    }
  }
  return state;
};

const decoded = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED: {
      return null;
    }
    case types.LOGIN_COMPLETED: {
      return jwtDecode(action.payload.token);
    }
    case types.TOKEN_REFRESH_COMPLETED: {
      // console.log('SI LLEGA?', jwtDecode(action.payload.newToken));
      return jwtDecode(action.payload.newToken);
    }
    case types.LOGIN_FAILED: {
      return null;
    }
    case types.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
  }

  return state;
};

const login = combineReducers({
  token,
  isLogingIn,
  error,
  decoded,
});

export default login;

export const getToken = state => state.token;
export const getIsLogingIn = state => state.isLogingIn;
export const getError = state => state.error;
export const getUserId = state =>
  state.decoded ? state.decoded.user_id : null;
