import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import {
  FETCH_DE_BIBLE_ERROR,
  FETCH_DE_BIBLE_INFLIGHT,
  FETCH_DE_BIBLE_SUCCESSFUL,
  FETCH_EN_BIBLE_ERROR,
  FETCH_EN_BIBLE_INFLIGHT,
  FETCH_EN_BIBLE_SUCCESSFUL,
  SET_CURRENT_BOOK,
  SET_CURRENT_CHAPTER,
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
  enBibleLoaded: localStorage.getItem('enBibleLoaded') === 'true' ? true : false,
  deBibleLoaded: localStorage.getItem('deBibleLoaded') === 'true' ? true : false
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
      localStorage.setItem('enBibleLoaded', 'true');
      return state
        .set('enBibleLoaded', true)
        .set('loading', false);

    case FETCH_DE_BIBLE_SUCCESSFUL:
      localStorage.setItem('deBibleLoaded', 'true');
      return state
        .set('deBibleLoaded', true)
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

    case SET_CURRENT_BOOK:
      return state
        .set('selectedBook', action.payload);

    case SET_CURRENT_CHAPTER:
      return state
        .set('selectedChapter', action.payload);

    default:
      return state;
  }
};

export default appReducer;
