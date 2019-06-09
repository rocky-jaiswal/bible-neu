import { Immutable as ImmutableType } from 'seamless-immutable';
import Immutable from 'seamless-immutable';

import { AppState } from './types';
import { LocaleEnum } from '../../constants/enums';

import {
  FETCH_BOOKS_SUCCESSFUL,
  SET_CURRENT_BOOK,
  SET_CURRENT_CHAPTER,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR,
  SET_CHAPTERS_RESULT,
  QUERY_IN_PROGRESS,
  QUERY_FAILED,
  QUERY_SUCCESSFUL
} from './actions';

const istate: AppState = {
  error: null,
  loading: false,
  locale: LocaleEnum.en,
  rightSidebarVisible: false,
  books: [],
  selectedBook: null,
  availableChapters: null,
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

    case QUERY_IN_PROGRESS:
      return state
        .set('loading', true);

    case QUERY_FAILED:
      return state
        .set('loading', false)
        .set('error', QUERY_FAILED);

    case QUERY_SUCCESSFUL:
        return state
        .set('loading', false)
        .set('error', null);

    case TOGGLE_RIGHT_SIDEBAR:
      return state
        .set('rightSidebarVisible', !state.rightSidebarVisible);

    case FETCH_BOOKS_SUCCESSFUL:
      return state
        .set('books', action.payload);

    case SET_CURRENT_BOOK:
      return state
        .set('selectedBook', action.payload);

    case SET_CHAPTERS_RESULT:
      return state
        .set('availableChapters', action.payload);

    case SET_CURRENT_CHAPTER:
      return state
        .set('selectedChapter', action.payload);

    default:
      return state;
  }
};

export default appReducer;
