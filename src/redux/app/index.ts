import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import {
  FETCH_EN_BIBLE_ERROR,
  FETCH_EN_BIBLE_INFLIGHT,
  FETCH_EN_BIBLE_SUCCESSFUL,
  FETCH_DE_BIBLE_ERROR,
  FETCH_DE_BIBLE_INFLIGHT,
  FETCH_DE_BIBLE_SUCCESSFUL,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR,
} from './constants';

const istate: AppStateType = {
  error: undefined,
  loading: false,
  locale: LocaleEnum.en,
  rightSidebarVisible: false,
  selectedBook: 'Gen',
  selectedChapter: 1,
  deBible: [],
  enBible: []
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: ActionType<any>): AppStateType => {
  switch (action.type) {

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case FETCH_EN_BIBLE_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_DE_BIBLE_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_EN_BIBLE_SUCCESSFUL:
      return state
        .set('enBible', action.payload)
        .set('loading', false);

    case FETCH_DE_BIBLE_SUCCESSFUL:
      return state
        .set('deBible', action.payload)
        .set('loading', false);

    case FETCH_EN_BIBLE_ERROR:
      return state
        .set('loading', false)
        .set('error', FETCH_EN_BIBLE_ERROR);

    case FETCH_DE_BIBLE_ERROR:
      return state
        .set('loading', false)
        .set('error', FETCH_DE_BIBLE_ERROR);

    case TOGGLE_RIGHT_SIDEBAR:
      return state
        .set('rightSidebarVisible', !state.rightSidebarVisible);

    default:
      return state;
  }
};

export default appReducer;
