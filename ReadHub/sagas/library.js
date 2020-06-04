import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';
  
  import {normalize} from 'normalizr';
  import moment from 'moment';
  import * as selectors from '../reducers';
  import * as actions from '../actions/library';
  import * as types from '../types/library';
  import * as schemas from '../schemas/libraries';
  import {API_BASE_URL} from '../Config';
  
  function* searchBooks(action) {
   
    let {bookName} = action.payload;
    if (bookName === undefined) {
      bookName = '';
    }
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/books/search/?bookName=${bookName}`,
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
            entities: {libraries},
            result,
          } = normalize(jsonResult, schemas.libraries);
          yield put(actions.completeFetchingBook(libraries, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingBook(non_field_errors[0]));
        }
      }
    } catch (error) {
      yield put(actions.failFetchingBook(error));
    }
  };

  function* loanBooks(action) {

    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
        let oneWeek = new Date();
        oneWeek = moment(oneWeek).add(8, 'day').format('YYYY-MM-DD');
        console.log(oneWeek);
        const body = {"user" : userId, "book" : action.payload.book, "devolution_date" : oneWeek}
        const response = yield call(
          fetch,
          `${API_BASE_URL}/books-loan/loan-book/`,
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`,
            },
          },
        );

        if (response.status === 200) {
          yield put(actions.completeLoaningBook(action.payload));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failLoaningBook(non_field_errors[0]));
        }
      }
    } catch (error) {
      console.log(error);
      yield put(actions.failLoaningBook(error));
    }
  }
  
  export function* watchPhysicalBookFetching() {
    yield takeEvery(types.FETCHING_BOOKS_STARTED, searchBooks);
  }

  export function* watchLoanBookStarted() {
    yield takeEvery(types.LOAN_A_BOOK_STARTED, loanBooks);
  }
  
