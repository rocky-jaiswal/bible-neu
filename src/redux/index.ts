import { combineReducers, Reducer } from 'redux';
import { RootStateType } from '../constants/types';

import appReducer from './app/';

export function createReducer(): Reducer<RootStateType> {
  return combineReducers({
    app: appReducer
  });
}
