import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_BOOKS,
  fetchBooksInProgress,
  fetchBooksFailed,
  fetchBooksSuccessful
} from '../redux/app/actions';

import API from '../api';
import QueryBuilder from '../api/queryBuilder';
import { getBooks, saveBooks, saveChapters, getChaptersForBook } from '../lib/db';
import { BookAndChapters } from '../redux/app/types';

function* getBookAndChaptersFromAPI() {
  const { getAllBooksAndChapters: result } = yield call(
    API.executeGQLQuery,
    () => QueryBuilder.getAllBooksAndChapters()
  );

  const booksFromAPI = result.map((r: BookAndChapters) => r.book);
  yield call(saveBooks, booksFromAPI);
  yield call(saveChapters, result);
}

export function* getFromDBOrAPI(selectedBook: string = 'Gen') {
  const books = yield call(getBooks);
  const chapters = yield call(getChaptersForBook, selectedBook);

  if (!books || books.length === 0 || !chapters || chapters.length === 0) {
    yield call(getBookAndChaptersFromAPI);
  }

  const booksFromDB = yield call(getBooks);
  const chaptersFromDB = yield call(getChaptersForBook, selectedBook);
  return { books: booksFromDB.map((b: { name: string }) => b.name), chapters: chaptersFromDB };
}

export function* fetchBooks() {
  try {
    yield put(fetchBooksInProgress());
    const result = yield call(getFromDBOrAPI);
    yield put(fetchBooksSuccessful(result.books));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchBooksFailed());
  }
}

export function* fetchBooksWatcher() {
  yield takeLatest(FETCH_BOOKS, fetchBooks);
}
