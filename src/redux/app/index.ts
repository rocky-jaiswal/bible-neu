import { Immutable as ImmutableType } from 'seamless-immutable';
import Immutable from 'seamless-immutable';

import { AppState } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';

import {
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_INFLIGHT,
  FETCH_BOOKS_SUCCESSFUL,
  SET_CURRENT_BOOK,
  SET_CURRENT_CHAPTER,
  SET_SIDEBAR_VIEW,
  SWITCH_LANGUAGE,
  SWITCH_SIDEBAR_VIEW,
  TOGGLE_RIGHT_SIDEBAR,
} from './actions';

const istate: AppState = {
  error: null,
  loading: false,
  sidebarLoading: false,
  locale: LocaleEnum.en,
  rightSidebarVisible: false,
  sidebarView: SidebarView.BOOKS,
  books: JSON.parse(localStorage.getItem('bookNames') || '[]'),
  availableChapters: [1],
  selectedBook: null,
  selectedChapter: null,
  selectedVerses: []
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: any): ImmutableType<AppState> => {
  switch (action.type) {

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case FETCH_BOOKS_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_BOOKS_SUCCESSFUL:
      return state
        .set('loading', false);

    case FETCH_BOOKS_ERROR:
      return state
        .set('error', FETCH_BOOKS_ERROR);

    case TOGGLE_RIGHT_SIDEBAR:
      return state
        .set('rightSidebarVisible', !state.rightSidebarVisible);

    case SET_CURRENT_BOOK:
      return state
        .set('selectedBook', action.payload);

    case SET_CURRENT_CHAPTER:
      return state
        .set('selectedChapter', action.payload);

    case SWITCH_SIDEBAR_VIEW:
      return state
        .set('sidebarView', state.sidebarView === SidebarView.BOOKS ? SidebarView.CHAPTERS : SidebarView.BOOKS);

    case SET_SIDEBAR_VIEW:
      return state
        .set('sidebarView', action.payload);

    default:
      return state;
  }
};

export default appReducer;
