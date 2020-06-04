import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted, watchRefreshTokenStarted} from './login';
import {watchProfilePictureUploaded, watchLoginCompleted} from './profile';
import {watchBookFetching, watchBookBuying} from './bookStore';
import {watchMagazineFetching, watchMagazineBuying} from './magazineStore';
import {
  watchBookCollectionFetching,
  watchBookCollectionFetchingOnLogin,
} from './bookcollection';
import {
  watchMagazineCollectionFetching,
  watchMagazineCollectionFetchingOnLogin
} from './magazineCollection';
import {watchSignUser} from './signup';
import {watchEquipmentFetching, watchLoanEquipmentStarted,
  watchInitialEquipmentLoanData,watchEquipmentLoanFetching,watchReturnEquipment} from './audiovisuals'

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchProfilePictureUploaded),
    fork(watchLoginCompleted),
    fork(watchBookFetching),
    fork(watchBookBuying),
    fork(watchMagazineFetching),
    fork(watchMagazineBuying),
    fork(watchBookCollectionFetching),
    fork(watchBookCollectionFetchingOnLogin),
    fork(watchRefreshTokenStarted),
    fork(watchMagazineCollectionFetching),
    fork(watchMagazineCollectionFetchingOnLogin),
    fork(watchSignUser),
    fork(watchEquipmentFetching),
    fork(watchLoanEquipmentStarted),
    fork(watchInitialEquipmentLoanData),
    fork(watchEquipmentLoanFetching),
    fork(watchReturnEquipment)

  ]);
}

export default mainSaga;
