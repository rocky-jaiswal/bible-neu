import { ActionType } from '../../constants/types';
import {
  FETCH_DE_BIBLE,
  FETCH_DE_BIBLE_ERROR,
  FETCH_DE_BIBLE_INFLIGHT,
  FETCH_DE_BIBLE_SUCCESSFUL,
  FETCH_EN_BIBLE,
  FETCH_EN_BIBLE_ERROR,
  FETCH_EN_BIBLE_INFLIGHT,
  FETCH_EN_BIBLE_SUCCESSFUL,
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

export function fetchEnBibleSuccessful(payload: string) {
  return {
    payload,
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

export function fetchDeBibleSuccessful(payload: string) {
  return {
    payload,
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
