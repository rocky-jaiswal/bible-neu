import { ActionType, Verse } from '../../constants/types';
import {
  FETCH_DE_BIBLE,
  FETCH_DE_BIBLE_ERROR,
  FETCH_DE_BIBLE_INFLIGHT,
  FETCH_DE_BIBLE_SUCCESSFUL,
  FETCH_EN_BIBLE,
  FETCH_EN_BIBLE_ERROR,
  FETCH_EN_BIBLE_INFLIGHT,
  FETCH_EN_BIBLE_SUCCESSFUL,
  SET_AVAILABLE_CHAPTERS,
  SET_AVAILABLE_CHAPTERS_RESULT,
  SET_BOOKS,
  SET_BOOKS_WITH_RESULT,
  SET_CURRENT_BOOK,
  SET_CURRENT_CHAPTER,
  SET_CURRENT_VERSES,
  SET_CURRENT_VERSES_RESULT,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR,
} from './constants';

import { LocaleEnum } from '../../constants/enums';

export function switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum> {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}

export function fetchEnBible() {
  return {
    type: FETCH_EN_BIBLE
  };
}

export function fetchEnBibleInProgress() {
  return {
    type: FETCH_EN_BIBLE_INFLIGHT
  };
}

export function fetchEnBibleSuccessful() {
  return {
    type: FETCH_EN_BIBLE_SUCCESSFUL
  };
}

export function fetchEnBibleFailed() {
  return {
    type: FETCH_EN_BIBLE_ERROR
  };
}

export function fetchDeBible() {
  return {
    type: FETCH_DE_BIBLE
  };
}

export function fetchDeBibleInProgress() {
  return {
    type: FETCH_DE_BIBLE_INFLIGHT
  };
}

export function fetchDeBibleSuccessful() {
  return {
    type: FETCH_DE_BIBLE_SUCCESSFUL
  };
}

export function fetchDeBibleFailed() {
  return {
    type: FETCH_DE_BIBLE_ERROR
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

export function setBooks() {
  return {
    type: SET_BOOKS
  };
}

export function setBooksWithResult(payload: string[]) {
  return {
    payload,
    type: SET_BOOKS_WITH_RESULT
  };
}

export function setCurrentVerses() {
  return {
    type: SET_CURRENT_VERSES
  };
}

export function setCurrentVersesWithResult(payload: Verse[]) {
  return {
    payload,
    type: SET_CURRENT_VERSES_RESULT
  };
}

export function setAvailableChapters() {
  return {
    type: SET_AVAILABLE_CHAPTERS
  };
}

export function setAvailableChaptersResult(payload: number[]) {
  return {
    payload,
    type: SET_AVAILABLE_CHAPTERS_RESULT
  };
}
