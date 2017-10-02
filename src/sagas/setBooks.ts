import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllBooks } from '../lib/db';

import { setBooksWithResult } from '../redux/app/actions';

import { QUERY_BOOKS } from '../redux/app/constants';

export function* setBooks(): {} {
  try {
    const books = yield call(getAllBooks);
    yield put(setBooksWithResult(books));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}

export function* setBooksWatcher() {
  yield takeLatest(QUERY_BOOKS, setBooks);
}
