import Dexie from 'dexie';

import { Verse } from '../constants/types';

const db = new Dexie('bible-app');

db.version(1).stores({
    enBible: '++,book,chapter,verse,text'
});

db.version(1).stores({
  deBible: '++,book,chapter,verse,text'
});

export const storeDEBible = (verses: Verse[]) => {
  return db.table('deBible').bulkPut(verses);
};

export const storeENBible = (verses: Verse[]) => {
  return db.table('enBible').bulkPut(verses);
};

export const getAllVerses = () => {
  return db
    .table('enBible')
    .toArray()
    .then(d => console.log(d));
};
