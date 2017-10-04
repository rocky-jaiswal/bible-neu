import { Dispatch as ReduxDispatch } from 'redux';

import { LocaleEnum, SidebarView } from './enums';

export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

interface AppState {
  error?: string;
  loading: boolean;
  sidebarLoading: boolean;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  sidebarView: SidebarView;
  books: string[];
  availableChapters: number[];
  selectedBook?: string;
  selectedChapter?: number;
  selectedVerses: Verse[];
  deBibleLoaded: boolean;
  enBibleLoaded: boolean;
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
