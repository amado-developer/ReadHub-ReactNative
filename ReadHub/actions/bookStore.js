import * as types from '../types/bookStore';

export const startRetrieveBooks = bookName => ({
  type: types.RETRIEVING_STARTED,
  payload: {bookName},
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

export const startBuyingBook = books => ({
  type: types.BUYING_COMPLETED,
  payload: {books},
});

export const completeBuyingBook = books => ({
  type: types.BUYING_COMPLETED,
  payload: {books},
});

export const failBuyBook = error => ({
  type: types.BUYING_FAILED,
  payload: {error},
});
