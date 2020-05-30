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

import * as selectors from '../reducers';
import * as actions from '../actions/bookStore';
import * as types from '../types/bookStore';
import * as schemas from '../schemas/digitalBooks';

const API_BASE_URL = 'http://192.168.1.5:8000/api/v1';
// const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';

function* searchBooks(action) {
  let {bookName} = action.payload;
  if (bookName === undefined) {
    bookName = '';
  }
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    const isFetching = yield select(selectors.isFetchingDigitalBooks);
    if (isAuth && isFetching) {
      const token = yield select(selectors.getToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/digital-books/search/?bookName=${bookName}`,
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
          entities: {digitalBooks},
          result,
        } = normalize(jsonResult, schemas.digitalBooks);
        // console.log(digitalBooks);
        // console.log(result);
        yield put(actions.completeRetrieveBooks(digitalBooks, result));
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failRetrieveBooks(non_field_errors[0]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchBookFetching() {
  yield takeEvery(types.RETRIEVING_STARTED, searchBooks);
}
