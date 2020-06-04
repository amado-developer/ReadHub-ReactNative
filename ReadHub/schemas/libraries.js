import {schema} from 'normalizr';

export const library = new schema.Entity('libraries');
export const libraries = new schema.Array(library);