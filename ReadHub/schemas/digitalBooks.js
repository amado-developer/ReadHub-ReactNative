import {schema} from 'normalizr';

export const digitalBook = new schema.Entity('digitalBooks');
export const digitalBooks = new schema.Array(digitalBook);
