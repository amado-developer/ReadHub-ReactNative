import {combineReducers} from 'redux';
import * as types from '../../types/cart';
import * as buyTypes from '../../types/bookStore';

const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADDING_TO_CART: {
      return [...state, action.payload.books];
    }
    case types.REMOVING_FROM_CART: {
      return [...state].filter(index => index !== action.payload.books);
    }
    case buyTypes.BUYING_COMPLETED: {
      return [];
    }
  }
  return state;
};

export default combineReducers({
  cart,
});

export const getCart = state => state.cart;
