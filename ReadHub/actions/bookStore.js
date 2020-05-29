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