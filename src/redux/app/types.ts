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
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  books: string[];
  selectedBook: string | null;
  availableChapters: number | null;
  selectedChapter: number | null;
  selectedVerses: Verse[];
}
