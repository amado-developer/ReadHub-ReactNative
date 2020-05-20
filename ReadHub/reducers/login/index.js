import {combineReducers} from 'redux';
import * as types from '../../types/logIn';

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

const login = combineReducers({
  token,
  isLogingIn,
  error,
});

export default login;

export const getToken = state => state.token;
export const getIsLogingIn = state => state.isLogingIn;
export const getError = state => state.error;
