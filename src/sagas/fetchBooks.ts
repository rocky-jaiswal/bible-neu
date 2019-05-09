import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_BOOKS,
  fetchBooksInProgress,
  fetchBooksFailed,
  fetchBooksSuccessful
} from '../redux/app/actions';

import { storeENBible } from '../lib/db';

import API from '../api';
import QueryBuilder from '../api/queryBuilder';

export function* fetchBooks(): {} {
  try {
    yield put(fetchBooksInProgress());
    const result = yield call(
      API.executeGQLQuery,
      'getVersesForBookAndChapter',
      () => QueryBuilder.getVersesForBookAndChapter('Gen', 1)
    );
    yield call(storeENBible, result);
    yield put(fetchBooksSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchBooksFailed());
  }
}

export function* fetchBooksWatcher() {
  yield takeLatest(FETCH_BOOKS, fetchBooks);
}
