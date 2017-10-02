import { call, put, select, takeLatest } from 'redux-saga/effects';

import { RootStateType } from '../constants/types';
import { setAvailableChaptersResult } from '../redux/app/actions';
import { getChapters } from '../lib/db';

import { QUERY_AVAILABLE_CHAPTERS } from '../redux/app/constants';

export function* setAvailableChapters(): {} {
  try {
    const locale = yield select((state: RootStateType) => state.app.locale);
    const book = yield select((state: RootStateType) => state.app.selectedBook);

    const verses = yield call(getChapters, locale, book);
    yield put(setAvailableChaptersResult(verses));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}

export function* setAvailableChaptersWatcher() {
  yield takeLatest(QUERY_AVAILABLE_CHAPTERS, setAvailableChapters);
}
