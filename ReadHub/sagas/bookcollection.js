import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import {normalize} from 'normalizr';
import * as actions from '../actions/bookCollection';
import * as types from '../types/bookCollection';
import * as loginTypes from '../types/logIn';
import * as selectors from '../reducers';
import * as schemas from '../schemas/bookCollections';
import {API_BASE_URL} from '../Config';

function* searchBooks(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);

    if (isAuth) {
      const token = yield select(selectors.getToken);
      const userId = yield select(selectors.getUserId);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/collections/get-collection/?user=${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );

      if (response.status === 200) {
        const jsonResult = yield response.json();
        const {
          entities: {bookCollections},
          result,
        } = normalize(jsonResult, schemas.bookCollections);
        yield put(actions.completeFetchingCollection(bookCollections, result));
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failFetchingCollection(non_field_errors[0]));
      }

      const pdfResponse = yield call(
        fetch,
        `${API_BASE_URL}/digital-book-pdf/get-pdf/?user=${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      if (pdfResponse.status === 200) {
        const jsonResult = yield pdfResponse.json();
        yield put(actions.completeFetchingPDF(jsonResult));
      }
    }
  } catch (error) {
    yield put(actions.failFetchingCollection(error));
  }
}
export function* watchBookCollectionFetching() {
  yield takeEvery(types.VIEW_BOOK_COLLECTION_STARTED, searchBooks);
}

export function* watchBookCollectionFetchingOnLogin() {
  yield takeEvery(loginTypes.LOGIN_COMPLETED, searchBooks);
}
