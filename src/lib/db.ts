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
    .toArray();
};

export const getAllBooks = () => {
  return db
    .table('enBible')
    .toArray()
    .then((verses) => verses.map(v => v.book))
    .then((allBooks) => {

      const obj = {};
      allBooks.forEach(b => obj[b] = true);
      return obj;
    })
    .then(obj => Object.keys(obj));
};
