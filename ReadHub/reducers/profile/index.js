import {combineReducers} from 'redux';
import * as types from '../../types/profile';
import * as paymentTypes from '../../types/payment';
import * as bookstoreTypes from '../../types/bookStore';
import * as loginTypes from '../../types/logIn';
import * as magazinestoreTypes from '../../types/magazineStore';

const info = (state = null, action) => {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:{
      return null;
    }
    case types.RETRIEVE_PROFILE_COMPLETED:{
      return action.payload.info;
    }
    case types.RETRIEVE_PROFILE_FAILED:{
      return null;
    }
    case paymentTypes.ADD_FOUNDS_FETCHING_COMPLETED:{
      const newInfo = {...state}
      let current = parseFloat(newInfo.balance)
      current += parseFloat(action.payload.quantity);
      newInfo.balance = current
      return newInfo;
    }
    case bookstoreTypes.BUYING_COMPLETED:{
      const newState = {...state}
      let current_balance = parseFloat(newState.balance)
      current_balance -= parseFloat(action.payload.books.ammount);
      newState.balance = current_balance
      return newState;
    }
    case magazinestoreTypes.MAGAZINE_BUYING_COMPLETED:{
      const newState = {...state}
      let current_balance = parseFloat(newState.balance)
      current_balance -= parseFloat(action.payload.magazines.ammount);
      newState.balance = current_balance
      return newState;
    }
    case loginTypes.AUTHENTICATION_IDENTITY_CLEARED: {
      return null;
    }
  }
  return state;
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:
      return null;
    case types.RETRIEVE_PROFILE_COMPLETED:
      return null;
    case types.RETRIEVE_PROFILE_FAILED:
      return action.payload.error;
  }
  return state;
};

const isRetrieving = (state = false, action) => {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_STARTED:
      return true;
    case types.RETRIEVE_PROFILE_COMPLETED:
      return false;
    case types.RETRIEVE_PROFILE_FAILED:
      return false;
  }

  return state;
};

const profile = combineReducers({
  info,
  error,
  isRetrieving,
});

export const getInfo = state => state.info;
export const getError = state => state.error;
export const getIsRetrieving = state => state.isRetrieving;
export const addFounds = (state, amount) => state.info.balance += amount;
export const buy = (state, amount) => state.info.balance -= amount;

export default profile;
