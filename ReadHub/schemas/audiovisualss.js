import {schema} from 'normalizr';

export const audiovisual = new schema.Entity('audiovisuals');
export const audiovisuals = new schema.Array(audiovisual);