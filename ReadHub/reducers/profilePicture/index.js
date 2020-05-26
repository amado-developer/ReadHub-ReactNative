import {combineReducers} from 'redux';
import * as types from '../../types/profile';

const picture = (state = null, action) => {
  switch (action.type) {
    case types.UPLOAD_PROFILE_PICTURE_STARTED:
      return action.payload.picture;
    case types.UPLOAD_PROFILE_PICTURE_COMPLETED:
      return action.payload.picture;
    case types.UPLOAD_PROFILE_PICTURE_FAILED:
      return null;
  }
  return state;
};

const isUploading = (state = false, action) => {
  switch (action.type) {
    case types.UPLOAD_PROFILE_PICTURE_STARTED:
      return true;
    case types.UPLOAD_PROFILE_PICTURE_COMPLETED:
      return false;
    case types.UPLOAD_PROFILE_PICTURE_FAILED:
      return false;
  }
  return state;
};

const isValid = (state = false, action) => {
  switch (action.type) {
    case types.UPLOAD_PROFILE_PICTURE_STARTED:
      return true;
    case types.UPLOAD_PROFILE_PICTURE_COMPLETED:
      return false;
    case types.UPLOAD_PROFILE_PICTURE_FAILED:
      return false;
  }
  return state;
};
const error = (state = null, action) => {
  switch (action.type) {
    case types.UPLOAD_PROFILE_PICTURE_STARTED:
      return null;
    case types.UPLOAD_PROFILE_PICTURE_COMPLETED:
      return null;
    case types.UPLOAD_PROFILE_PICTURE_FAILED:
      return action.payload.error;
  }
  return state;
};

const profilePicture = combineReducers({
  picture,
  isUploading,
  isValid,
  error,
});

export const getPicture = state => state.picture;
export const getIsUploading = state => state.isUploading;
export const getIsValid = state => state.isValid;
export const getError = state => state.error;

export default profilePicture;
