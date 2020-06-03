import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

//import * as selectors from '../reducers';

import * as actions from '../actions/logIn';
import * as types from '../types/logIn';
import * as selectors from '../reducers';
import {API_BASE_URL} from '../Config';

function* login(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/token-auth/`, {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const {email} = action.payload;
      const {token} = yield response.json();
      yield put(actions.completeLogin(token, email));
    } else {
      const {non_field_errors} = yield response.json();
      yield put(actions.failLogin(non_field_errors[0]));
    }
  } catch (error) {
    yield put(actions.failLogin('Falló horrible la conexión mano'));
  }
}

export function* watchLoginStarted() {
  yield takeEvery(types.LOGIN_STARTED, login);
}

function* refreshToken(action) {
  const expiration = yield select(selectors.getAuthExpiration);
  const isAuthenticated = yield select(selectors.isAuthenticated);
  const now =  parseInt(new Date().getTime() / 1000);
  console.log(expiration - now);
  if (expiration - now < 2400 && isAuthenticated) {
    try {
      const token = yield select(selectors.getToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/token-refresh/`,
        {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers:{
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        const jResponse = yield response.json();
        yield put(actions.completeTokenRefresh(jResponse.token));
      } else {
        // TODO: poner un redirect al home (login)
        const { non_field_errors } = yield response.json();
        yield put(actions.failTokenRefresh(non_field_errors[0]));
      }
    } catch (error) {
      // TODO: poner un redirect al home (login)
      yield put(actions.failTokenRefresh('Falló horrible la conexión mano'));
    }
  }
}

export function* watchRefreshTokenStarted() {
  yield takeEvery(
    types.TOKEN_REFRESH_STARTED,
    refreshToken,
  );
}
