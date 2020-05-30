import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';
import RNFetchBlob from 'react-native-fetch-blob';

import * as selectors from '../reducers';
import * as types from '../types/profile';
import * as loginTypes from '../types/logIn';
import * as actions from '../actions/profile';

const API_BASE_URL = 'http://192.168.1.5:8000/api/v1';
// const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';


function* uploadProfilePicture(action) {
  const isLogged = yield select(selectors.isAuthenticated);
  if (isLogged) {
    const token = yield select(selectors.getToken);
    const id = yield select(selectors.getUserId);

    yield RNFetchBlob.fetch(
      'PATCH',
      `${API_BASE_URL}/users/upload-profile-picture/${id}/`,
      {
        Authorization: `JWT ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'profile_picture',
          filename: action.payload.picture.fileName,
          data: action.payload.picture.data,
        },
      ],
    );

    const imageResponse = yield call(fetch, `${API_BASE_URL}/users/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    });

    const jsonResult = yield imageResponse.json();
    const profilePicture = jsonResult.profile_picture;
    yield put(actions.completeUploadProfilePicture(profilePicture));
  }
}

function* getInitialProfilePicture(action) {
  const token = yield select(selectors.getToken);
  const id = yield select(selectors.getUserId);
  const imageResponse = yield call(fetch, `${API_BASE_URL}/users/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  });

  const jsonResult = yield imageResponse.json();
  const profilePicture = jsonResult.profile_picture;
  yield put(actions.completeUploadProfilePicture(profilePicture));

  const infoResponse = yield call(fetch, `${API_BASE_URL}/users/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  });
  const jsonInfoResult = yield infoResponse.json();
  // console.log(jsonInfoResult);
  yield put(actions.completeRetrieveProfile(jsonInfoResult));
}

export function* watchProfilePictureUploaded() {
  yield takeEvery(types.UPLOAD_PROFILE_PICTURE_STARTED, uploadProfilePicture);
}

export function* watchLoginCompleted() {
  yield takeEvery(loginTypes.LOGIN_COMPLETED, getInitialProfilePicture);
}
