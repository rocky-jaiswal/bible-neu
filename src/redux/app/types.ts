import { LocaleEnum } from '../../constants/enums';

export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BookAndChapters {
  book: string;
  chapter: number;
}

export interface AppState {
  error: string | null;
  loading: boolean;
  sidebarLoading: boolean;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  books: string[];
  availableChapters: number | null;
  selectedBook: string | null;
  selectedChapter: number | null;
  selectedVerses: Verse[];
}
