import { Store } from 'redux';

export default function loggerMiddleware(store: Store<never>) {
  return (next: never) => (action: never) => {
    // tslint:disable-next-line:no-console
    console.log(action);
    return next(action);
  };
}
