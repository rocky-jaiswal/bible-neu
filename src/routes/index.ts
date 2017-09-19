import BookView from '../containers/BookView';
import Root from '../containers/Root';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  component: React.ComponentClass<{}>;
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
  }
};

export default routes;
