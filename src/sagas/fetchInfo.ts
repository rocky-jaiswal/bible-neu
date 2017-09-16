import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchInfoFailed,
  fetchInfoInProgress,
  fetchInfoSuccessful
} from '../redux/app/actions';

import { FETCH_INFO } from '../redux/app/constants';

import API from '../api';

export function* fetchInfo(): {} {
  try {
    yield put(fetchInfoInProgress());

    const result = yield call(API.fetchInfo);
    yield put(fetchInfoSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchInfoFailed());
  }
}

export function* fetchQuestionsWatcher() {
  yield takeLatest(FETCH_INFO, fetchInfo);
}
