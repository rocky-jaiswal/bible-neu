import { LocaleEnum } from '../constants/enums';
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
  return db
    .table('deBible')
    .clear()
    .then(() => db.table('deBible').bulkPut(verses));
};

export const storeENBible = (verses: Verse[]) => {
  return db
    .table('enBible')
    .clear()
    .then(() => db.table('enBible').bulkPut(verses));
};

export const getAllBooks = () => {
  return db
    .table('enBible')
    .toArray()
    .then((verses) => verses.map(v => v.book))
    .then((allBooks) => {

      const obj = {};
      allBooks.forEach(b => obj[b] = true);
      return Object.keys(obj);
    });
};

export const getChapters = (locale: string, book: string) => {
  return db
    .table(locale === LocaleEnum.en ? 'enBible' : 'deBible')
    .where({ book })
    .toArray()
    .then((verses) => verses.map((verse: Verse) => verse.chapter))
    .then((allVerses) => {

      const obj = {};
      allVerses.forEach(c => obj[c] = true);
      return Object.keys(obj);
    });
};

export const getVerses = (locale: string, book: string, chapter: number) => {
  return db
    .table(locale === LocaleEnum.en ? 'enBible' : 'deBible')
    .where({ book, chapter })
    .toArray();
};
