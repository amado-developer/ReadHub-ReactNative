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

export const startBuyingMagazines = (magazines, ammount) => ({
  type: types.MAGAZINE_BUYING_STARTED,
  payload: {magazines, ammount},
});

export const completeBuyingMagazines = (magazines, ammount) => ({
  type: types.MAGAZINE_BUYING_COMPLETED,
  payload: {magazines, ammount},
});

export const failBuyMagazines = error => ({
  type: types.MAGAZINE_BUYING_FAILED,
  payload: {error},
});
