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

export const startFetchingPDF = () => ({
  type: types.PDF_FETCHING_STARTED,
});

export const completeFetchingPDF = pdf => ({
  type: types.PDF_FETCHING_COMPLETED,
  payload: {pdf},
});

export const failFetchingPDF = error => ({
  type: types.PDF_FETCHING_FAILED,
  payload: {error},
});
