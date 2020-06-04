import {schema} from 'normalizr';

export const eLoan = new schema.Entity('eLoans');
export const eLoans = new schema.Array(eLoan);