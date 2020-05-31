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
  
 //const API_BASE_URL = 'http://192.168.1.5:8000/api';
 const API_BASE_URL = 'http://10.0.2.2:8000/api';


  function* SignUser(action){
      try{

        const response = yield call(fetch, `${API_BASE_URL}/signUp`,{
            metho: 'POST',
            body: JSON.stringify(action.payload),
            header: {
                'Content-Type': 'application/json',
            },

        });
        if (response.status === 200){
            const { newUser } = yield response.json();
            yield put(actions.completeSignup(newUser, 'password'))
        } else{
            const {non_errors} = yield response.json();
            yield put(actions.failSignup(non_errors));
        }
      }
      catch (error){
          yield put(actions.failSignup('Falló horrible la conexión mano del SignUp'))
            
    }
  };

  export function* watchSignUser(){
    yield takeEvery(types.SIGNUP_STARTED, SignUser)
   
  }
  