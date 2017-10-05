import { call, put, takeLatest } from 'redux-saga/effects';

import { queryCompleted, queryInProgress, setBooksWithResult } from '../redux/app/actions';
import { getAllBooks } from '../lib/db';

import { QUERY_BOOKS } from '../redux/app/constants';

export function* setBooks(): {} {
  try {
    yield put(queryInProgress());
    const books = yield call(getAllBooks);
    yield put(setBooksWithResult(books));
    yield put(queryCompleted());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}

export function* setBooksWatcher() {
  yield takeLatest(QUERY_BOOKS, setBooks);
}
