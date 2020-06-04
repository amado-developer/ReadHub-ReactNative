import {schema} from 'normalizr';

export const equipmentLoan = new schema.Entity('equipmentLoans');
export const equipmentLoans = new schema.Array(equipmentLoan);