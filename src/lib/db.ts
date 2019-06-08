import Dexie from 'dexie';

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

// tslint:disable-next-line:no-any
export const saveChapters = async (data: any) => {
  return db
    .table('chapters')
    .clear()
    // tslint:disable-next-line:no-any
    .then(() => db.table('chapters').bulkPut(data.map((d: any) => ({ book: d.book, chapterCount: d.chapterCount }))));
};
