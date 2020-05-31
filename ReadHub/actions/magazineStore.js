import * as types from '../types/magazineStore';

export const startRetrieveMagazines = magazineName => ({
  type: types.MAGAZINE_RETRIEVING_STARTED,
  payload: {magazineName},
});

export const completeRetrieveMagazines = (entities, order) => ({
  type: types.MAGAZINE_RETRIEVING_COMPLETED,
  payload: {
    entities,
    order,
  },
});

export const failRetrieveMagazines = error => ({
  type: types.MAGAZINE_RETRIEVING_FAILED,
  payload: {error},
});

export const startBuyingMagazines = magazines => ({
  type: types.MAGAZINE_BUYING_STARTED,
  payload: {magazines},
});

export const completeBuyingMagazines = magazines => ({
  type: types.MAGAZINE_BUYING_COMPLETED,
  payload: {magazines},
});

export const failBuyMagazines = error => ({
  type: types.MAGAZINE_BUYING_FAILED,
  payload: {error},
});
