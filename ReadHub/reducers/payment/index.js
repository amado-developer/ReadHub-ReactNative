import {combineReducers} from 'redux';
import * as types from '../../types/payment';

const paymentOption = (state = null, action) => {
    switch (action.type) {
      case types.PAYMENT_OPTION_FETCHING_STARTED: {
        return null;
      }
      case types.PAYMENT_OPTION_FETCHING_COMPLETED: {
        return action.payload;
      }
      case types.PAYMENT_OPTION_FETCHING_FAILED: {
        return null;
      }
      case types.CHANGE_PAYMENT_OPTIONS_COMPLETED: {
          return action.payload
      }
    }
    return state;
};

const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.PAYMENT_OPTION_FETCHING_STARTED: {
        return true;
      }
      case types.PAYMENT_OPTION_FETCHING_COMPLETED: {
        return false;
      }
      case types.PAYMENT_OPTION_FETCHING_FAILED: {
        return false;
      }

      case types.CHANGE_PAYMENT_OPTIONS_STARTED:{
          return true;
      }

      case types.CHANGE_PAYMENT_OPTIONS_COMPLETED:{
          return false;
      }

      case types.CHANGE_PAYMENT_OPTIONS_FAILED:{
          return false;
      }
    }
    return state;
};

const error = (state = null, action) => {
    switch (action.type) {
      case types.PAYMENT_OPTION_FETCHING_STARTED: {
        return null;
      }
      case types.PAYMENT_OPTION_FETCHING_COMPLETED: {
        return null;
      }
      case types.PAYMENT_OPTION_FETCHING_FAILED: {
        return action.payload.error;
      }
      case types.PAYMENT_OPTION_FETCHING_FAILED: {
          return action.payload.error;
      }
    }
    return state;
};

const payment = combineReducers({
    paymentOption,
    isFetching,
    error,
})

export const getPaymentOption = state => state.paymentOption;
export const getIsFecthing = state => state.isFetching;
export const getError = state => state.error;

export default payment;
  