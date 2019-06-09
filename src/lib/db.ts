import Dexie from 'dexie';
import { BookAndChapters } from '../redux/app/types';

const db = new Dexie('bible-app');

db.version(1).stores({
  books: '++id, name'
});

db.version(1).stores({
  chapters: '++id, book, chapterCount'
});

export const getBooks = async () => {
  return db
    .table('books')
    .toArray();
};

export const getChaptersForBook = async (book: string) => {
  return db
    .table('chapters')
    .where({ book })
    .toArray();
};

export const saveBooks = async (books: string[]) => {
  return db
    .table('books')
    .clear()
    .then(() => db.table('books').bulkPut(books.map(b => ({ name: b }))));
};

export const saveChapters = async (data: BookAndChapters[]) => {
  return db
    .table('chapters')
    .clear()
    .then(() => db
      .table('chapters')
      // tslint:disable-next-line:no-any
      .bulkPut(data.map((d: any) => ({ book: d.book, chapterCount: d.chapterCount }))));
};
