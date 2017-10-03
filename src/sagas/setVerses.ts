import { call, put, select, takeLatest } from 'redux-saga/effects';

import { RootStateType } from '../constants/types';
import { queryCompleted, queryInProgress, setCurrentVersesWithResult } from '../redux/app/actions';
import { getVerses } from '../lib/db';

import { QUERY_CURRENT_VERSES } from '../redux/app/constants';

export function* setVerses(): {} {
  try {
    yield put(queryInProgress());
    const locale = yield select((state: RootStateType) => state.app.locale);
    const book = yield select((state: RootStateType) => state.app.selectedBook);
    const chapter = yield select((state: RootStateType) => state.app.selectedChapter);

    const verses = yield call(getVerses, locale, book, chapter);
    yield put(setCurrentVersesWithResult(verses));
    yield put(queryCompleted());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}

export function* setVersesWatcher() {
  yield takeLatest(QUERY_CURRENT_VERSES, setVerses);
}
