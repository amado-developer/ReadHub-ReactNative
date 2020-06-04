import * as types from '../types/bookLoanCart';

export const addToCart = books => ({
  type: types.ADDING_TO_BOOK_LOAN_CART,
  payload: {books},
});

export const removeFromCart = books => ({
  type: types.REMOVING_FROM_BOOK_LOAN_CART,
  payload: {books},
});