export const SWITCH_LANGUAGE           = 'app/App/SWITCH_LANGUAGE';
export const TOGGLE_RIGHT_SIDEBAR      = 'app/App/TOGGLE_RIGHT_SIDEBAR';

export const FETCH_BOOKS               = 'app/App/FETCH_BOOKS';
export const FETCH_BOOKS_INFLIGHT      = 'app/App/FETCH_BOOKS_INFLIGHT';
export const FETCH_BOOKS_SUCCESSFUL    = 'app/App/FETCH_BOOKS_SUCCESSFUL';
export const FETCH_BOOKS_ERROR         = 'app/App/FETCH_BOOKS_ERROR';

export const QUERY_BOOKS               = 'app/App/QUERY_BOOKS';
export const SET_BOOKS_WITH_RESULT     = 'app/App/SET_BOOKS_WITH_RESULT';

export const SET_CURRENT_BOOK          = 'app/App/SET_CURRENT_BOOK';
export const SET_CURRENT_CHAPTER       = 'app/App/SET_CURRENT_CHAPTER';

export const QUERY_CURRENT_VERSES      = 'app/App/QUERY_CURRENT_VERSES';
export const SET_CURRENT_VERSES_RESULT = 'app/App/SET_CURRENT_VERSES_RESULT';

export const QUERY_AVAILABLE_CHAPTERS      = 'app/App/QUERY_AVAILABLE_CHAPTERS';
export const SET_AVAILABLE_CHAPTERS_RESULT = 'app/App/SET_AVAILABLE_CHAPTERS_RESULT';

export const QUERY_IN_PROGRESS = 'app/App/QUERY_IN_PROGRESS';
export const QUERY_COMPLETED   = 'app/App/QUERY_COMPLETED';

export const SWITCH_SIDEBAR_VIEW  = 'app/App/SWITCH_SIDEBAR_VIEW';
export const SET_SIDEBAR_VIEW     = 'app/App/SET_SIDEBAR_VIEW';

import { ActionType, Verse } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';

export function switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum> {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}

export function fetchBooks() {
  return {
    type: FETCH_BOOKS
  };
}

export function fetchBooksInProgress() {
  return {
    type: FETCH_BOOKS_INFLIGHT
  };
}

export function fetchBooksSuccessful() {
  return {
    type: FETCH_BOOKS_SUCCESSFUL
  };
}

export function fetchBooksFailed() {
  return {
    type: FETCH_BOOKS_ERROR
  };
}

export function toggleRightSidebar() {
  return {
    type: TOGGLE_RIGHT_SIDEBAR
  };
}

export function setCurrentBook(payload: string) {
  return {
    payload,
    type: SET_CURRENT_BOOK
  };
}

export function setCurrentChapter(payload: number) {
  return {
    payload,
    type: SET_CURRENT_CHAPTER
  };
}

export function queryBooks() {
  return {
    type: QUERY_BOOKS
  };
}

export function setBooksWithResult(payload: string[]) {
  return {
    payload,
    type: SET_BOOKS_WITH_RESULT
  };
}

export function queryCurrentVerses() {
  return {
    type: QUERY_CURRENT_VERSES
  };
}

export function setCurrentVersesWithResult(payload: Verse[]) {
  return {
    payload,
    type: SET_CURRENT_VERSES_RESULT
  };
}

export function queryAvailableChapters() {
  return {
    type: QUERY_AVAILABLE_CHAPTERS
  };
}

export function setAvailableChaptersResult(payload: number[]) {
  return {
    payload,
    type: SET_AVAILABLE_CHAPTERS_RESULT
  };
}

export function queryInProgress() {
  return {
    type: QUERY_IN_PROGRESS
  };
}

export function queryCompleted() {
  return {
    type: QUERY_COMPLETED
  };
}

export function switchSidebarView() {
  return {
    type: SWITCH_SIDEBAR_VIEW
  };
}

export function setSidebarView(payload: SidebarView) {
  return {
    payload,
    type: SET_SIDEBAR_VIEW
  };
}
