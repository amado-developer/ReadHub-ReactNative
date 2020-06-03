import {schema} from 'normalizr';

export const magazineCollection = new schema.Entity('magazineCollections');
export const magazineCollections = new schema.Array(magazineCollection);
