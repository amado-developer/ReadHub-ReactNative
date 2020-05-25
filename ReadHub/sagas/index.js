import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted} from './login';
import {watchProfilePictureUploaded} from './profile';
function* mainSaga() {
  yield all([fork(watchLoginStarted), fork(watchProfilePictureUploaded)]);
}

export default mainSaga;
