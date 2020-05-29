import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted} from './login';
import {watchProfilePictureUploaded, watchLoginCompleted} from './profile';
import {watchBookFetching} from './bookStore';
function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchProfilePictureUploaded),
    fork(watchLoginCompleted),
    fork(watchBookFetching),
  ]);
}

export default mainSaga;
