import { Immutable } from 'seamless-immutable';
import { Dispatch as ReduxDispatch, Action } from 'redux';
import { RouterState } from 'connected-react-router';
import { LocaleEnum, SidebarView } from './enums';

export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface AppState {
  error: string | null;
  loading: boolean;
  sidebarLoading: boolean;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  sidebarView: SidebarView;
  books: string[];
  availableChapters: number[];
  selectedBook: string | null;
  selectedChapter: number | null;
  selectedVerses: Verse[];
}

export interface RootState {
  app: Immutable<AppState>;
  router?: RouterState;
}

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
