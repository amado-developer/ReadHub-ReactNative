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
  import * as actions from '../actions/magazineCollection';
  import * as types from '../types/magazineCollection';
  import * as loginTypes from '../types/logIn';
  import * as selectors from '../reducers';
  import * as schemas from '../schemas/magazineCollection';
  import {API_BASE_URL} from '../Config';
  
  function* searchMagazines(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/magazine-collections/get-magazine-collection/?user=${userId}`,
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
            entities: {magazineCollections},
            result,
          } = normalize(jsonResult, schemas.magazineCollections);
          yield put(actions.completeFetchingCollection(magazineCollections, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingCollection(non_field_errors[0]));
        }
  
        const pdfResponse = yield call(
          fetch,
          `${API_BASE_URL}/magazines-pdf/get-magazine-pdf/?user=${userId}`,
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
  export function* watchMagazineCollectionFetching() {
    yield takeEvery(types.VIEW_MAGAZINE_COLLECTION_STARTED, searchMagazines);
  }
  
  export function* watchMagazineCollectionFetchingOnLogin() {
    yield takeEvery(loginTypes.LOGIN_COMPLETED, searchMagazines);
  }
  