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
  import * as loginTypes from '../types/logIn';
  import * as types from '../types/library';
  import * as schemas from '../schemas/loans';
  import * as librarySchemas from '../schemas/libraries';
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
          } = normalize(jsonResult, librarySchemas.libraries);
          yield put(actions.completeFetchingBook(libraries, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingBook(non_field_errors[0]));
          console.log(non_field_errors[0]);
        }
      }
    } catch (error) {
      console.log(error);
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
      yield put(actions.failLoaningBook(error));
    }
  }

  function* fetchLoans(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/books-loan/get-loans/?user=${userId}`,
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
            entities: {loans},
            result,
          } = normalize(jsonResult, schemas.loans);
  
          yield put(actions.completeFetchingLoans(loans, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingLoans(non_field_errors[0]));
        }
      }
    } catch (error) {
      yield put(actions.failFetchingLoans(error));
    }
  }

  function* returnBook(action){
    try{
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
      console.log(action.payload.book);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/books-loan/return-book/?book=${action.payload.book}&user=${userId}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`,
            },
          },
        );

        if (response.status === 200) {
          yield put(actions.completeReturningBook(action.payload.book));
        } else {
          const {non_field_errors} = yield response.json();
          console.log(non_field_errors[0]);
          yield put(actions.failReturningBook(non_field_errors[0]));
        }
      }
    }
    catch (error) {
      console.log(error);
    yield put(actions.failReturningBook(error));
  }
}
  export function* watchPhysicalBookFetching() {
    yield takeEvery(types.FETCHING_BOOKS_STARTED, searchBooks);
  }

  export function* watchLoanBookStarted() {
    yield takeEvery(types.LOAN_A_BOOK_STARTED, loanBooks);
  }

  export function* watchLoanFetching(){
    yield takeEvery(types.FETCHING_LOAN_COLLECTION_STARTED, fetchLoans);
  }

  export function* watchInitialLoanData(){
    yield takeEvery(loginTypes.LOGIN_COMPLETED, fetchLoans);
  }

  export function* watchReturnABook(){
    yield takeEvery(types.RETURN_A_BOOK_STARTED, returnBook);
  }
  
