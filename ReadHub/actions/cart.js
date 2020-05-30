import * as types from '../types/cart';

export const addToCart = books => ({
  type: types.ADDING_TO_CART,
  payload: {books},
});

export const removeFromCart = books => ({
  type: types.REMOVING_FROM_CART,
  payload: {books},
});
