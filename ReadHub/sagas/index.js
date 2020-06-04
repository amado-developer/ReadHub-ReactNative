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
<<<<<<< HEAD
import {watchSignUser} from './signup';
import {watchEquipmentFetching, watchLoanEquipmentStarted,
  watchInitialEquipmentLoanData,watchEquipmentLoanFetching,watchReturnEquipment} from './audiovisuals'
=======
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
>>>>>>> e0d0319938a822bd8e0fd444dfcfbc55e3f71e0a

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
<<<<<<< HEAD
    fork(watchSignUser),
    fork(watchEquipmentFetching),
    fork(watchLoanEquipmentStarted),
    fork(watchInitialEquipmentLoanData),
    fork(watchEquipmentLoanFetching),
    fork(watchReturnEquipment)

=======
    fork(watchPaymentOptionChanged),
    fork(watchInitialData),
    fork(watchAddFounds),
    fork(watchPhysicalBookFetching),
    fork(watchLoanBookStarted),
    fork(watchInitialLoanData),
    fork(watchLoanFetching),
    fork(watchReturnABook),
>>>>>>> e0d0319938a822bd8e0fd444dfcfbc55e3f71e0a
  ]);
}

export default mainSaga;
