import { setBooksWatcher } from './setBooks';

import {
  fetchEnBibleWatcher
} from './fetchEnBible';

import {
  fetchDeBibleWatcher
} from './fetchDeBible';

export default [
  fetchEnBibleWatcher,
  fetchDeBibleWatcher,
  setBooksWatcher
];
