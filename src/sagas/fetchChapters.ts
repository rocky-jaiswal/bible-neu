import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
  FETCH_CHAPTERS,
  queryInProgress,
  setCurrentBook,
  queryFailed,
  setChaptersResult,
  fetchBooksSuccessful,
  querySuccessful
} from '../redux/app/actions';

import { RootState } from '../constants/types';
import { getFromDBOrAPI } from './fetchBooksAndChapters';
import { BookAndChapters } from '../redux/app/types';

// tslint:disable-next-line:no-any
export function* fetchChapters(action: any): {} {
  try {
    yield put(queryInProgress());
    yield put(setCurrentBook(action.payload));
    const state: RootState = yield select();
    const result = yield call(getFromDBOrAPI, state.app.selectedBook!);
    if (state.app.books.length === 0) {
      yield put(fetchBooksSuccessful(result.books));
    }
    const selectedBookAndChapter =
      result.chapters.find((res: BookAndChapters) => res.book === state.app.selectedBook!)!;
    yield put(setChaptersResult(selectedBookAndChapter.chapterCount));
    yield put(querySuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(queryFailed());
  }
}

export function* fetchChaptersWatcher() {
  yield takeLatest(FETCH_CHAPTERS, fetchChapters);
}
