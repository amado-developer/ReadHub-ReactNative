import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted} from './login';
import {watchProfilePictureUploaded, watchLoginCompleted} from './profile';
import {watchBookFetching, watchBookBuying} from './bookStore';
import {watchMagazineFetching, watchMagazineBuying} from './magazineStore';
function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchProfilePictureUploaded),
    fork(watchLoginCompleted),
    fork(watchBookFetching),
    fork(watchBookBuying),
    fork(watchMagazineFetching),
    fork(watchMagazineBuying),
  ]);
}

export default mainSaga;
