import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchEnBibleFailed,
  fetchEnBibleInProgress,
  fetchEnBibleSuccessful
} from '../redux/app/actions';

import { FETCH_EN_BIBLE } from '../redux/app/constants';

import API from '../api';

export function* fetchEnBible(): {} {
  try {
    yield put(fetchEnBibleInProgress());

    const result = yield call(API.fetchEnBible);
    yield put(fetchEnBibleSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchEnBibleFailed());
  }
}

export function* fetchEnBibleWatcher() {
  yield takeLatest(FETCH_EN_BIBLE, fetchEnBible);
}
