import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
  QUERY_CHAPTERS,
  queryInProgress,
  queryFailed,
  setChaptersResult,
  fetchBooksSuccessful
} from '../redux/app/actions';

import { RootState } from '../constants/types';
import { getFromDBOrAPI } from './fetchBooks';
import { BookAndChapters } from '../redux/app/types';
import { getBooks } from '../lib/db';

export function* queryChapters(): {} {
  try {
    yield put(queryInProgress());
    const state: RootState = yield select();
    const result = yield call(getFromDBOrAPI, state.app.selectedBook!);

    if (state.app.books.length === 0) {
      const booksFromDB = yield call(getBooks);
      const books = booksFromDB.map((b: { name: string }) => b.name);
      yield put(fetchBooksSuccessful(books));
    }

    const selectedBookAndChapter =
      result.chapters.find((res: BookAndChapters) => res.book === state.app.selectedBook!)!;
    yield put(setChaptersResult(selectedBookAndChapter.chapterCount));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(queryFailed());
  }
}

export function* queryChaptersWatcher() {
  yield takeLatest(QUERY_CHAPTERS, queryChapters);
}
