import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchEnBibleFailed, fetchEnBibleInProgress, fetchEnBibleSuccessful, queryBooks } from '../redux/app/actions';

import { storeENBible } from '../lib/db';
import { FETCH_EN_BIBLE } from '../redux/app/constants';

import API from '../api';

export function* fetchEnBible(): {} {
  try {
    yield put(fetchEnBibleInProgress());

    const result = yield call(API.fetchEnBible);
    yield call(storeENBible, result.data);
    yield put(queryBooks());
    yield put(fetchEnBibleSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchEnBibleFailed());
  }
}

export function* fetchEnBibleWatcher() {
  yield takeLatest(FETCH_EN_BIBLE, fetchEnBible);
}
