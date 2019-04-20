import { Immutable as ImmutableType } from 'seamless-immutable';
import Immutable from 'seamless-immutable';

import { ActionType, AppState } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';

import {
  FETCH_DE_BIBLE_ERROR,
  FETCH_DE_BIBLE_INFLIGHT,
  FETCH_DE_BIBLE_SUCCESSFUL,
  FETCH_EN_BIBLE_ERROR,
  FETCH_EN_BIBLE_INFLIGHT,
  FETCH_EN_BIBLE_SUCCESSFUL,
  QUERY_COMPLETED,
  QUERY_IN_PROGRESS,
  SET_AVAILABLE_CHAPTERS_RESULT,
  SET_BOOKS_WITH_RESULT,
  SET_CURRENT_BOOK,
  SET_CURRENT_CHAPTER,
  SET_CURRENT_VERSES_RESULT,
  SET_SIDEBAR_VIEW,
  SWITCH_LANGUAGE,
  SWITCH_SIDEBAR_VIEW,
  TOGGLE_RIGHT_SIDEBAR,
} from './constants';

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
const appReducer = (state = initialState, action: ActionType<any>): ImmutableType<AppState> => {
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
        .set('loading', false);

    case FETCH_DE_BIBLE_SUCCESSFUL:
      return state
        .set('loading', false);

    case FETCH_EN_BIBLE_ERROR:
      return state
        .set('error', FETCH_EN_BIBLE_ERROR);

    case FETCH_DE_BIBLE_ERROR:
      return state
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

    case SET_BOOKS_WITH_RESULT:
      localStorage.setItem('bookNames', JSON.stringify(action.payload));
      return state
        .set('books', action.payload);

    case SET_CURRENT_VERSES_RESULT:
      return state
        .set('selectedVerses', action.payload);

    case SET_AVAILABLE_CHAPTERS_RESULT:
      return state
        .set('availableChapters', action.payload);

    case QUERY_IN_PROGRESS:
      return state
        .set('loading', true)
        .set('sidebarLoading', true);

    case QUERY_COMPLETED:
      return state
        .set('loading', false)
        .set('sidebarLoading', false);

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
