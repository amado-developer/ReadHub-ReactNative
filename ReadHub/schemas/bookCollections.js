import {schema} from 'normalizr';

export const bookCollection = new schema.Entity('bookCollections');
export const bookCollections = new schema.Array(bookCollection);
