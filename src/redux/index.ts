import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { RootStateType } from '../constants/types';

import appReducer from './app/';

import { initialState as appInitialState } from './app';

export const reduxInitialState: RootStateType = {
  app: appInitialState
};

export function createReducer(history: History): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    router: connectRouter(history)
  });

  // tslint:disable-next-line:no-any
  const rootReducer = (state: RootStateType | undefined, action: any): RootStateType => {
    return reducer(state, action);
  };

  return rootReducer;
}
