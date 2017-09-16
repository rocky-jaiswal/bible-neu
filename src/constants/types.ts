import { Dispatch as ReduxDispatch } from 'redux';

import { LocaleEnum } from './enums';

interface AppState {
  counter: number;
  error?: string;
  loading: boolean;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
}

export type AppStateType = AppState;

interface RootState {
  app: AppState;
}

export type RootStateType = RootState;

interface Action<T> {
  type: string;
  payload?: T;
}

export type ActionType<T> = Action<T>;

export type Dispatch = ReduxDispatch<RootState>;
