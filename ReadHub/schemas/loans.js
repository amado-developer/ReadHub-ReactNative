import {schema} from 'normalizr';

export const loan = new schema.Entity('loans');
export const loans = new schema.Array(loan);