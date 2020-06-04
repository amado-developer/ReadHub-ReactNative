import {fork, all} from 'redux-saga/effects';

import {watchLoginStarted, watchRefreshTokenStarted} from './login';
import {watchProfilePictureUploaded, watchLoginCompleted} from './profile';
import {watchBookFetching, watchBookBuying} from './bookStore';
import {watchMagazineFetching, watchMagazineBuying} from './magazineStore';
import {watchSignUser} from './signup';
import {watchEquipmentFetching, watchLoanEquipmentStarted,
  watchInitialEquipmentLoanData,watchEquipmentLoanFetching,watchReturnEquipment} from './audiovisuals'
import {
  watchBookCollectionFetching,
  watchBookCollectionFetchingOnLogin,
} from './bookcollection';
import {
  watchMagazineCollectionFetching,
  watchMagazineCollectionFetchingOnLogin
} from './magazineCollection';
import {
  watchPaymentOptionChanged, 
  watchInitialData,
  watchAddFounds,
} from './payment';

import {
  watchPhysicalBookFetching,
  watchLoanBookStarted,
  watchInitialLoanData,
  watchLoanFetching,
  watchReturnABook,
} from './library';

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
    fork(watchPaymentOptionChanged),
    fork(watchInitialData),
    fork(watchAddFounds),
    fork(watchPhysicalBookFetching),
    fork(watchLoanBookStarted),
    fork(watchInitialLoanData),
    fork(watchLoanFetching),
    fork(watchReturnABook),
    fork(watchSignUser),
    fork(watchEquipmentFetching),
    fork(watchLoanEquipmentStarted),
    fork(watchInitialEquipmentLoanData),
    fork(watchEquipmentLoanFetching),
    fork(watchReturnEquipment)

  ]);
}

export default mainSaga;