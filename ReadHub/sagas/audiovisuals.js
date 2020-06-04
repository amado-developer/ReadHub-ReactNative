import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';
  
  import {normalize} from 'normalizr';
  import moment from 'moment';
  import * as schemas from '../schemas/eLoans';
  import * as selectors from '../reducers';
  import * as actions from '../actions/audiovisuals';
  import * as types from '../types/audiovisuals';
  import * as loginTypes from '../types/logIn';
  import * as audioschemas from '../schemas/audiovisualss';
  import {API_BASE_URL} from '../Config';
  
  function* searchEquipment(action) {
   
    let {equipmentName} = action.payload;
    if (equipmentName === undefined) {
        equipmentName = '';
    }
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/equipments/search/?equipmentName=${equipmentName}`,
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
            entities: {audiovisuals},
            
            result,
          } = normalize(jsonResult, audioschemas.audiovisuals);
          yield put(actions.completeFetchingEquipments(audiovisuals, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingEquipment(non_field_errors[0]));
        }
      }
    } catch (error) {
      console.log(error)
      yield put(actions.failFetchingEquipment(error));
    }
  };

  function* loanEquipment(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
        let oneWeek = new Date();
        oneWeek = moment(oneWeek).add(8, 'day').format('YYYY-MM-DD');
        console.log(oneWeek);
        console.log(action.payload.equipment);
        const body = {user : userId, equipment : action.payload.equipment, devolution_date : oneWeek};
        console.log(JSON.stringify(body))
        const response = yield call(
          fetch,
          `${API_BASE_URL}/equipment-loan/pick-equipment/`,
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
          yield put(actions.completeLoaningEquipment(action.payload));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failLoaningEquipment(non_field_errors[0]));
        }
      }
    } catch (error) {
      console.log(error);
      yield put(actions.failLoaningEquipment(error));
    }
  }

  function* fetchEquipmentLoans(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/equipment-loan/get-loans/?user=${userId}`,
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
          //console.log(jsonResult)
          const {
            entities: {eLoans},
            result,
          } = normalize(jsonResult, schemas.eLoans);

          console.log(eLoans)
  
          yield put(actions.completeFetchingEquipmentLoans(eLoans, result));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingEquipment(non_field_errors[0]));
        }
      }
    } catch (error) {
      yield put(actions.failFetchingEquipment(error));
    }
  }


  
  function* returnEquipment(action){
    try{
      const isAuth = yield select(selectors.isAuthenticated);
      if (isAuth) {
        const token = yield select(selectors.getToken);
        const userId = yield select(selectors.getUserId);
      console.log(action.payload.book);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/equipment-loan/return-equipment/?equipment=${action.payload.equipment}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`,
            },
          },
        );

        if (response.status === 200) {
          yield put(actions.completeReturningEquipment(action.payload.book));
        } else {
          const {non_field_errors} = yield response.json();
          console.log(non_field_errors[0]);
          yield put(actions.failReturningEquipment(non_field_errors[0]));
        }
      }
    }
    catch (error) {
      console.log(error);
    yield put(actions.failReturningEquipment(error));
  }
}
  
  export function* watchEquipmentFetching() {
    yield takeEvery(types.FETCHING_EQUIPMENT_STARTED, searchEquipment);
  }

  export function* watchLoanEquipmentStarted() {
    yield takeEvery(types.LOAN_EQUIPMENT_STARTED, loanEquipment);
  }

  export function* watchEquipmentLoanFetching(){
    yield takeEvery(types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED, fetchEquipmentLoans);
  }

  export function* watchInitialEquipmentLoanData(){
    yield takeEvery(loginTypes.LOGIN_COMPLETED, fetchEquipmentLoans);
  }

  export function* watchReturnEquipment(){
    yield takeEvery(types.RETURN_EQUIPMENT_STARTED, returnEquipment);
  }
  