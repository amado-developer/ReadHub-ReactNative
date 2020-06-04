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

    const response = yield call(fetch, `${API_BASE_URL}/users/signup/`, {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json',
      },
    },);

    if (response.status === 200) {
        
      yield put(actions.completeSignup());
 
    } else {
      const {non_field_errors} = yield response.json();
      yield put(actions.failSignup(non_field_errors[0]));
      console.log(response.json())
    }
  } catch (error) {
    yield put(actions.failSignup('Falló horrible la conexión mano del SignUp'));
    console.log(error);
  }
}

export function* watchSignUser() {
  yield takeEvery(types.SIGNUP_STARTED, SignUser);
}
