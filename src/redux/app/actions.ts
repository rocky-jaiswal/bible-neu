import { ActionType } from '../../constants/types';
import {
  FETCH_INFO,
  FETCH_INFO_ERROR,
  FETCH_INFO_INFLIGHT,
  FETCH_INFO_SUCCESSFUL,
  INCREMENT_COUNTER,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR
} from './constants';

import { LocaleEnum } from '../../constants/enums';

export function switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum> {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}

export function fetchInfo() {
  return {
    type: FETCH_INFO
  };
}

export function fetchInfoInProgress() {
  return {
    type: FETCH_INFO_INFLIGHT
  };
}

export function fetchInfoSuccessful(payload: string) {
  return {
    payload,
    type: FETCH_INFO_SUCCESSFUL
  };
}

export function fetchInfoFailed() {
  return {
    type: FETCH_INFO_ERROR
  };
}

export function toggleRightSidebar() {
  return {
    type: TOGGLE_RIGHT_SIDEBAR
  };
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}
