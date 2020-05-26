import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted} from './login';
import {watchProfilePictureUploaded, watchLoginCompleted} from './profile';
function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchProfilePictureUploaded),
    fork(watchLoginCompleted),
  ]);
}

export default mainSaga;
