import { Dispatch as ReduxDispatch } from 'redux';

import { LocaleEnum } from './enums';

export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

interface AppState {
  error?: string;
  loading: boolean;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  selectedBook: string;
  selectedChapter: number;
  deBible: Verse[];
  enBible: Verse[];
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
