// import { Verse } from './types';
import { LocaleEnum } from '../../constants/enums';

export const SWITCH_LANGUAGE           = 'app/App/SWITCH_LANGUAGE';
export const TOGGLE_RIGHT_SIDEBAR      = 'app/App/TOGGLE_RIGHT_SIDEBAR';

export const FETCH_BOOKS_AND_CHAPTERS  = 'app/App/FETCH_BOOKS_AND_CHAPTERS';
export const FETCH_CHAPTERS            = 'app/App/FETCH_CHAPTERS';

export const SET_CURRENT_BOOK          = 'app/App/SET_CURRENT_BOOK';
export const SET_CURRENT_CHAPTER       = 'app/App/SET_CURRENT_CHAPTER';

export const FETCH_BOOKS_SUCCESSFUL    = 'app/App/FETCH_BOOKS_SUCCESSFUL';
export const SET_CHAPTERS_RESULT       = 'app/App/SET_CHAPTERS_RESULT';
export const SET_VERSES_RESULT         = 'app/App/SET_VERSES_RESULT';

export const QUERY_IN_PROGRESS = 'app/App/QUERY_IN_PROGRESS';
export const QUERY_FAILED      = 'app/App/QUERY_FAILED';
export const QUERY_SUCCESSFUL  = 'app/App/QUERY_SUCCESSFUL';

export function switchLanguage(payload: LocaleEnum) {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}

export function fetchBooksAndChapters() {
  return {
    type: FETCH_BOOKS_AND_CHAPTERS
  };
}

export function fetchChapters(payload: string) {
  return {
    payload,
    type: FETCH_CHAPTERS
  };
}

export function fetchBooksSuccessful(payload: string[]) {
  return {
    payload,
    type: FETCH_BOOKS_SUCCESSFUL
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

export function setChaptersResult(payload: number) {
  return {
    payload,
    type: SET_CHAPTERS_RESULT
  };
}

export function queryInProgress() {
  return {
    type: QUERY_IN_PROGRESS
  };
}

export function queryFailed() {
  return {
    type: QUERY_FAILED
  };
}

export function querySuccessful() {
  return {
    type: QUERY_SUCCESSFUL
  };
}
