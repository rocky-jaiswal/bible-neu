import { Immutable } from 'seamless-immutable';
import { Dispatch as ReduxDispatch, Action } from 'redux';
import { RouterState } from 'connected-react-router';
import { AppState } from '../redux/app/types';

export interface RootState {
  app: Immutable<AppState>;
  router?: RouterState;
}

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
