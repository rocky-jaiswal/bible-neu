import { fetchBooksWatcher } from './fetchBooksAndChapters';
import { fetchChaptersWatcher } from './fetchChapters';
import { fetchVersesWatcher } from './fetchVerses';

export default [
  fetchBooksWatcher,
  fetchChaptersWatcher,
  fetchVersesWatcher
];
