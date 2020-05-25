import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as types from '../types/profile';
import * as actions from '../actions/profile';
const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';
import RNFetchBlob from 'react-native-fetch-blob';

function* uploadProfilePicture(action) {
  const isLogged = yield select(selectors.isAuthenticated);
  if (isLogged) {
    const token = yield select(selectors.getToken);
    const id = yield select(selectors.getUserId);
    RNFetchBlob.fetch(
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
    ).catch(err => {
      put(actions.failUploadProfilePicture(err));
    });

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

export function* watchProfilePictureUploaded() {
  yield takeEvery(types.UPLOAD_PROFILE_PICTURE_STARTED, uploadProfilePicture);
}
