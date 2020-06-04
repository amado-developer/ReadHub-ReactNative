import * as types from '../types/payment';

export const startFetchingPaymentOption = paymentOption => ({
  type: types.PAYMENT_OPTION_FETCHING_STARTED,
  payload: {paymentOption},
});

export const completeFetchingPaymentOption = (cardHolder, cardNumber, expDate, cvv) => ({
  type: types.PAYMENT_OPTION_FETCHING_COMPLETED,
  payload: {
    cardHolder,
    cardNumber,
    expDate,
    cvv
  },
});

export const failtFetchingPaymentOption = error => ({
  type: types.CHANGE_PAYMENT_OPTIONS_FAILED,
  payload: {error},
});

export const startChangePaymentOption = (cardHolder, cardNumber, expDate, cvv) => ({
  type: types.CHANGE_PAYMENT_OPTIONS_STARTED,
  payload: {cardHolder, cardNumber, expDate, cvv},
});

export const completeChangePaymentOption = (info) => ({
  type: types.CHANGE_PAYMENT_OPTIONS_COMPLETED,
  payload: {info}, 
});

export const failChangePaymentOption = error => ({
  type: types.CHANGE_PAYMENT_OPTIONS_FAILED,
  payload: {error},
});

export const startAddFounds = quantity => ({
    type: types.ADD_FOUNDS_FETCHING_STARTED,
    payload: {quantity},
  });
  
  export const completeAddFounds = quantity => ({
    type: types.ADD_FOUNDS_FETCHING_COMPLETED,
    payload: {quantity},
  });
  
  export const failAddFounds = error => ({
    type: types.ADD_FOUNDS_FETCHING_FAILED,
    payload: {error},
  });
