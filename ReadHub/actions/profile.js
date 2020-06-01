import * as types from '../types/profile';

export const startUploadProfilePicture = picture => ({
  type: types.UPLOAD_PROFILE_PICTURE_STARTED,
  payload: {picture},
});

export const completeUploadProfilePicture = picture => ({
  type: types.UPLOAD_PROFILE_PICTURE_COMPLETED,
  payload: {picture},
});

export const failUploadProfilePicture = error => ({
  type: types.UPLOAD_PROFILE_PICTURE_FAILED,
  payload: {error},
});

export const startUpdateProfileData = (
  firstName,
  lastName,
  age,
  gender,
  occupation,
  addressLine1,
  addressLine2,
) => ({
  type: types.UPDATE_PROFILE_DATA_STARTED,
  payload: {
    firstName,
    lastName,
    age,
    gender,
    occupation,
    addressLine1,
    addressLine2,
  },
});

export const completeUpdateProfileData = () => ({
  type: types.UPDATE_PROFILE_DATA_COMPLETED,
});

export const failUpdateProfileData = error => ({
  type: types.UPDATE_PROFILE_DATA_FAILED,
  payload: {error},
});

export const startViewBookCollection = () => ({
  type: types.VIEW_BOOK_COLLECTION_STARTED,
});

export const completeViewBookCollection = (book_image, bookName, author) => ({
  type: types.VIEW_BOOK_COLLECTION_COMPLETED,
  payload: {
    book_image,
    bookName,
    author,
  },
});

export const failViewBookCollection = error => ({
  type: types.VIEW_BOOK_COLLECTION_FAILED,
  payload: {error},
});

export const startChangeDescription = description => ({
  type: types.CHANGE_DESCRIPTION_STARTED,
  payload: {description},
});
export const completeChangeDescription = () => ({
  type: types.CHANGE_DESCRIPTION_COMPLETED,
});

export const failChangeDescription = error => ({
  type: types.CHANGE_DESCRIPTION_FAILED,
  payload: {error},
});

export const startRetrieveProfile = () => ({
  type: types.RETRIEVE_PROFILE_STARTED,
});

export const completeRetrieveProfile = info => ({
  type: types.RETRIEVE_PROFILE_COMPLETED,
  payload: {info},
});

export const failRetrieveProfile = error => ({
  type: types.RETRIEVE_PROFILE_FAILED,
  payload: {error},
});
