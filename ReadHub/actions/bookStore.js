import * as types from '../types/bookStore';

export const startRetrieveBooks = () => ({
  type: types.RETRIEVING_STARTED,
});

export const completeRetrieveBooks = (entities, order) => ({
  type: types.RETRIEVING_COMPLETED,
  payload: {
    entities,
    order,
  },
});

export const failRetrieveBooks = error => ({
  type: types.RETRIEVING_FAILED,
  payload: {error},
});

export const addToCart = books => ({
  type: types.ADDING_TO_CART,
  payload: {books},
});

export const remoteFromCart = book => ({
  type: types.REMOVING_FROM_CART,
  payload: {book},
});
