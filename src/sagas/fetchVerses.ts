import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
  queryInProgress,
  setCurrentBook,
  queryFailed,
  fetchBooksSuccessful,
  querySuccessful,
  FETCH_VERSES,
  setCurrentChapter,
  setVersesResult
} from '../redux/app/actions';

import API from '../api';
import QueryBuilder from '../api/queryBuilder';
import { RootState } from '../constants/types';
import { getFromDBOrAPI } from './fetchBooksAndChapters';

function* getVersesFromAPI(book: string, chapter: number) {
  const result = yield call(
    API.executeGQLQuery,
    () => QueryBuilder.getVersesForBookAndChapter(book, chapter)
  );
  return result;
}

// tslint:disable-next-line:no-any
export function* fetchVerses(action: any): {} {
  try {
    yield put(queryInProgress());
    yield put(setCurrentBook(action.payload.book));
    yield put(setCurrentChapter(action.payload.chapter));

    const state: RootState = yield select();
    if (state.app.books.length === 0) {
      const result = yield call(getFromDBOrAPI, state.app.selectedBook!);
      yield put(fetchBooksSuccessful(result.books));
    }

    const { verses } = yield call(getVersesFromAPI, state.app.selectedBook!, state.app.selectedChapter!);
    yield put(setVersesResult(verses));

    yield put(querySuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(queryFailed());
  }
}

export function* fetchVersesWatcher() {
  yield takeLatest(FETCH_VERSES, fetchVerses);
}
