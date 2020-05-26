import {combineReducers} from 'redux';
import * as types from '../../types/profile';

const info = (state = null, action) => {
  try {
    console.log('Type: ' + action.type);
    console.log('Payload: ' + action.payload.info.first_name);
  } catch (error) {}

  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:
      return null;
    case types.RETRIEVE_PROFILE_COMPLETED:
      return action.payload.info;
    case types.RETRIEVE_PROFILE_FAILED:
      return null;
  }
  return state;
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:
      return null;
    case types.RETRIEVE_PROFILE_COMPLETED:
      return null;
    case types.RETRIEVE_PROFILE_FAILED:
      return action.payload.error;
  }
  return state;
};

const isRetrieving = (state = false, action) => {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:
      return true;
    case types.RETRIEVE_PROFILE_COMPLETED:
      return false;
    case types.RETRIEVE_PROFILE_FAILED:
      return false;
  }

  return state;
};

const profile = combineReducers({
  info,
  error,
  isRetrieving,
});

export const getInfo = state => state.info;
export const getError = state => state.error;
export const getIsRetrieving = state => state.isRetrieving;

export default profile;
