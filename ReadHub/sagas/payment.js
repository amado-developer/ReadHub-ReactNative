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
  import * as types from '../types/payment';
  import * as loginTypes from '../types/logIn';
  import * as actions from '../actions/payment';
  import {API_BASE_URL} from '../Config';
  
  function* changePaymentMethod(action) {
    const isLogged = yield select(selectors.isAuthenticated);
    
    if (isLogged) {
      const token = yield select(selectors.getToken);
      const id = yield select(selectors.getUserId);
      const paymentOption = yield select(selectors.getPaymentOption);
      console.log(paymentOption.info.length);
      try{
        if(paymentOption.info.length === 0){
            const response = yield call(
                fetch,
                `${API_BASE_URL}/payment-option/change-payment-option/?user=${id}`,
                {
                  method: 'POST',
                  body: JSON.stringify(action.payload),
                  headers: {
                  'Content-Type': 'application/json',
                  Authorization: `JWT ${token}`,
                  },
                },
              );
        }else{
            const response = yield call(
                fetch,
                `${API_BASE_URL}/payment-option/change-payment-option/?user=${id}`,
                {
                  method: 'PATCH',
                  body: JSON.stringify(action.payload),
                  headers: {
                  'Content-Type': 'application/json',
                  Authorization: `JWT ${token}`,
                  },
                },
              );
      }

      const response = yield call(fetch, `${API_BASE_URL}/payment-option/get-payment-option/?user=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`,
        },
      });
    
      const jsonResult = yield response.json();
      console.log('El result: ' + jsonResult)
      yield put(actions.completeChangePaymentOption(jsonResult));
    }catch(error){
        console.log(error);
          yield put(actions.failChangePaymentOption(error))
    }
  }
}
  
  function* getPaymentMethod(action) {
    const token = yield select(selectors.getToken);
    const id = yield select(selectors.getUserId);

    const response = yield call(fetch, `${API_BASE_URL}/payment-option/get-payment-option/?user=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    });
  
    const jsonResult = yield response.json();
    yield put(actions.completeChangePaymentOption(jsonResult));
  }

  function* addFounds(action){
    const isLogged = yield select(selectors.isAuthenticated);
    if (isLogged) {
      const token = yield select(selectors.getToken);
      const id = yield select(selectors.getUserId);
      try{
        const response = yield call(
          fetch,
          `${API_BASE_URL}/users/${id}/add-to-balance/`,
          {
            method: 'PATCH',
            body: JSON.stringify(action.payload),
            headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
            },
          },
        );
        
        yield put(actions.completeAddFounds(action.payload.quantity));

      }catch(error){
        console.log(error);
        yield put(actions.failAddFounds(error));
      }
    }
  }
  
  export function* watchPaymentOptionChanged() {
    yield takeEvery(types.CHANGE_PAYMENT_OPTIONS_STARTED, changePaymentMethod);
  }
  
  export function* watchInitialData() {
    yield takeEvery(loginTypes.LOGIN_COMPLETED, getPaymentMethod);
  }

  export function* watchAddFounds(){
    yield takeEvery(types.ADD_FOUNDS_FETCHING_STARTED, addFounds);
  }

  
  