import BookView from '../containers/BookView';
import Root from '../containers/Root';
import ChapterView from '../containers/ChapterView';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  // tslint:disable-next-line:no-any
  component: any;
}

interface Routes {
  [propName: string]: RouteDefinition;
}

const routes: Routes = {
  root: {
    sequence: 1,
    component: Root,
    exact: true,
    path: '/'
  },
  book: {
    sequence: 2,
    component: BookView,
    exact: true,
    path: '/books/:book'
  },
  chapter: {
    sequence: 3,
    component: ChapterView,
    exact: true,
    path: '/books/:book/chapter/:chapter'
  }
};

export default routes;
