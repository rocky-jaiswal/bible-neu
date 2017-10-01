import { call, put, takeLatest } from 'redux-saga/effects';
import { storeDEBible } from '../lib/db';

import {
  fetchDeBibleFailed,
  fetchDeBibleInProgress,
  fetchDeBibleSuccessful,
} from '../redux/app/actions';

import { FETCH_DE_BIBLE } from '../redux/app/constants';

import API from '../api';

export function* fetchDeBible(): {} {
  try {
    yield put(fetchDeBibleInProgress());

    const result = yield call(API.fetchDeBible);
    yield call(storeDEBible, result.data);
    yield put(fetchDeBibleSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchDeBibleFailed());
  }
}

export function* fetchDeBibleWatcher() {
  yield takeLatest(FETCH_DE_BIBLE, fetchDeBible);
}
