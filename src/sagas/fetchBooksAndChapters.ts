import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_BOOKS_AND_CHAPTERS,
  fetchBooksSuccessful,
  queryInProgress,
  querySuccessful,
  queryFailed
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

  yield call(saveBooks, result.map((r: BookAndChapters) => r.book));
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
    yield put(queryInProgress());
    const result = yield call(getFromDBOrAPI);
    yield put(fetchBooksSuccessful(result.books));
    yield put(querySuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(queryFailed());
  }
}

export function* fetchBooksWatcher() {
  yield takeLatest(FETCH_BOOKS_AND_CHAPTERS, fetchBooks);
}
