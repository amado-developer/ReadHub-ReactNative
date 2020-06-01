import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/signup';
import * as types from '../types/signup';
import {API_BASE_URL} from '../Config';

function* SignUser(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/signUp`, {
      metho: 'POST',
      body: JSON.stringify(action.payload),
      header: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const {newUser} = yield response.json();
      yield put(actions.completeSignup(newUser, 'password'));
    } else {
      const {non_errors} = yield response.json();
      yield put(actions.failSignup(non_errors));
    }
  } catch (error) {
    yield put(actions.failSignup('Falló horrible la conexión mano del SignUp'));
  }
}

export function* watchSignUser() {
  yield takeEvery(types.SIGNUP_STARTED, SignUser);
}
