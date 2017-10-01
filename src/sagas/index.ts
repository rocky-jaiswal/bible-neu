import { setAvailableChaptersWatcher } from './setAvailableChapters';
import { fetchEnBibleWatcher } from './fetchEnBible';
import { fetchDeBibleWatcher } from './fetchDeBible';
import { setBooksWatcher } from './setBooks';
import { setVersesWatcher } from './setVerses';

export default [
  fetchEnBibleWatcher,
  fetchDeBibleWatcher,
  setBooksWatcher,
  setAvailableChaptersWatcher,
  setVersesWatcher
];
