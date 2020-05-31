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
  import * as actions from '../actions/magazineStore';
  import * as types from '../types/magazineStore';
  import * as schemas from '../schemas/magazines';
  
  const API_BASE_URL = 'http://192.168.1.5:8000/api/v1';
  // const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';
  
  function* searchMagazines(action) {
    let {magazineName} = action.payload;

    if (magazineName === undefined) {
      magazineName = '';
    }
    try {
      const isAuth = yield select(selectors.isAuthenticated);
     
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/magazines/search/?magazineName=${magazineName}`,
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
            entities: {magazines},
            result,
          } = normalize(jsonResult, schemas.magazines);


          yield put(actions.completeRetrieveMagazines(magazines, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failRetrieveMagazines(non_field_errors[0]));
        }
      }
    } catch (error) {
      yield put(actions.failRetrieveMagazines(error));
    }
  }
  
  function* buyMagazines(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      const userId = yield select(selectors.getUserId);
      if (isAuth) {
        const body = {user: userId, magazines: action.payload.magazines};
        const token = yield select(selectors.getToken);
        const cart = yield select(selectors.getCart);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/magazine-collections/add-to-collection/`,
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
          const jsonResult = yield response.json();
          yield put(actions.completeBuyingMagazines(action.payload));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failBuyMagazines(non_field_errors[0]));
        }
      }
    } catch (error) {
    //   console.log(error);
    }
  }
  
  export function* watchMagazineFetching() {
    yield takeEvery(types.MAGAZINE_RETRIEVING_STARTED, searchMagazines);
  }
  
  export function* watchMagazineBuying() {
    yield takeEvery(types.MAGAZINE_BUYING_STARTED, buyMagazines);
  }
  