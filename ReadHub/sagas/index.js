import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
} from './login';



function* mainSaga() {
  yield all([fork(watchLoginStarted),]);
}

export default mainSaga;