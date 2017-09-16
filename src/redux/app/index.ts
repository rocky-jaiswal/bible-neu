import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import {
  FETCH_INFO_ERROR,
  FETCH_INFO_INFLIGHT,
  FETCH_INFO_SUCCESSFUL,
  INCREMENT_COUNTER,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR,
} from './constants';

const istate: AppStateType = {
  counter: 0,
  error: undefined,
  loading: false,
  locale: LocaleEnum.en,
  rightSidebarVisible: false
};

export const initialState = Immutable.from(istate);

const appReducer = (state = initialState, action: ActionType<{}>): AppStateType => {
  switch (action.type) {

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case FETCH_INFO_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_INFO_SUCCESSFUL:
      return state
        .set('loading', false);

    case FETCH_INFO_ERROR:
      return state
        .set('loading', false)
        .set('error', FETCH_INFO_ERROR);

    case TOGGLE_RIGHT_SIDEBAR:
      return state
        .set('rightSidebarVisible', !state.rightSidebarVisible);

    case INCREMENT_COUNTER:
      return state
        .set('counter', state.counter + 1);

    default:
      return state;
  }
};

export default appReducer;
