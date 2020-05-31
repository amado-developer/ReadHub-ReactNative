import * as types from '../types/magazineCart';

export const addToCart = magazines => ({
  type: types.ADDING_MAGAZINE_TO_CART,
  payload: {magazines},
});

export const removeFromCart = magazines => ({
  type: types.REMOVING_MAGAZINE_FROM_CART,
  payload: {magazines},
});
