import Root from '../containers/Root';
import BookView from '../containers/BookView';
import ChapterView from '../containers/ChapterView';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  component: React.ComponentClass;
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
    path: '/books/:book/chapters/:chapter'
  }
};

export default routes;
