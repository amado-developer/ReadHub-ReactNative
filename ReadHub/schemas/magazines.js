import {schema} from 'normalizr';

export const magazine = new schema.Entity('magazines');
export const magazines = new schema.Array(magazine);
