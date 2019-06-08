// import { Verse } from './types';
import { LocaleEnum } from '../../constants/enums';

export const SWITCH_LANGUAGE           = 'app/App/SWITCH_LANGUAGE';
export const TOGGLE_RIGHT_SIDEBAR      = 'app/App/TOGGLE_RIGHT_SIDEBAR';

export const FETCH_BOOKS               = 'app/App/FETCH_BOOKS';
export const FETCH_BOOKS_INFLIGHT      = 'app/App/FETCH_BOOKS_INFLIGHT';
export const FETCH_BOOKS_SUCCESSFUL    = 'app/App/FETCH_BOOKS_SUCCESSFUL';
export const FETCH_BOOKS_ERROR         = 'app/App/FETCH_BOOKS_ERROR';

export const SET_CURRENT_BOOK          = 'app/App/SET_CURRENT_BOOK';
export const SET_CURRENT_CHAPTER       = 'app/App/SET_CURRENT_CHAPTER';

export const QUERY_CHAPTERS      = 'app/App/QUERY_CHAPTERS';
export const SET_CHAPTERS_RESULT = 'app/App/SET_CHAPTERS_RESULT';

export const QUERY_VERSES      = 'app/App/QUERY_VERSES';
export const SET_VERSES_RESULT = 'app/App/SET_VERSES_RESULT';

export const QUERY_IN_PROGRESS = 'app/App/QUERY_IN_PROGRESS';
export const QUERY_FAILED      = 'app/App/QUERY_FAILED';

export function switchLanguage(payload: LocaleEnum) {
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

export function fetchBooksSuccessful(payload: string[]) {
  return {
    payload,
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

export function queryChapters() {
  return {
    type: QUERY_CHAPTERS
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
