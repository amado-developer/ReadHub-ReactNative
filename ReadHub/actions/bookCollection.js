import * as types from '../types/bookCollection';

export const startFetchingCollection = () => ({
  type: types.VIEW_BOOK_COLLECTION_STARTED,
});

export const completeFetchingCollection = (entities, order) => ({
  type: types.VIEW_BOOK_COLLECTION_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingCollection = error => ({
  type: types.VIEW_BOOK_COLLECTION_FAILED,
  payload: {error},
});

export const pressButton = () => ({
  type: types.BUTTON_PRESSED,
});

export const unpressButton = () => ({
  type: types.BUTTON_UNPRESSED,
});
