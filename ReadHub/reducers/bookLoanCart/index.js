import {combineReducers} from 'redux';
import * as types from '../../types/bookLoanCart';

const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADDING_TO_BOOK_LOAN_CART: {
      return [...state, action.payload.books];
    }
    case types.REMOVING_FROM_BOOK_LOAN_CART: {
      return [...state].filter(index => index !== action.payload.books);
    }
  }
  return state;
};

const bookLoanCart = combineReducers({
  cart,
});

export const getCart = state => state.cart;
export default bookLoanCart;
