import * as types from '../types/magazineCollection';

export const startFetchingCollection = () => ({
  type: types.VIEW_MAGAZINE_COLLECTION_STARTED,
});

export const completeFetchingCollection = (entities, order) => ({
  type: types.VIEW_MAGAZINE_COLLECTION_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingCollection = error => ({
  type: types.VIEW_MAGAZINE_COLLECTION_FAILED,
  payload: {error},
});

export const pressButton = () => ({
  type: types.MAGAZINE_COLLECTION_BUTTON_PRESSED,
});

export const unpressButton = () => ({
  type: types.MAGAZINE_COLLECTION_BUTTON_UNPRESSED,
});

export const startFetchingPDF = () => ({
  type: types.MAGAZINE_PDF_FETCHING_STARTED,
});

export const completeFetchingPDF = pdf => ({
  type: types.MAGAZINE_PDF_FETCHING_COMPLETED,
  payload: {pdf},
});

export const failFetchingPDF = error => ({
  type: types.MAGAZINE_PDF_FETCHING_FAILED,
  payload: {error},
});
