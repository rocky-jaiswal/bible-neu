import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouterState } from 'connected-react-router';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { fetchChapters } from '../../redux/app/actions';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  selectedBook: string | null;
  availableChapters: number;
  router: RouterState;
}

interface DispatchProps {
  fetchChapters(book: string): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    selectedBook: state.app.selectedBook,
    availableChapters: state.app.availableChapters || 0,
    router: state.router!
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchChapters: (book: string) => dispatch(fetchChapters(book))
  };
};

const toRange = (num: number) => (
  Array.apply(null, Array(num)).map((_, i) => i + 1)
);

export class BookView extends React.Component<Props & DispatchProps> {

  setup(props: Props) {
    const path = props.router.location.pathname;
    const book = path.split('/')[2];
    this.props.fetchChapters(book);
  }

  componentDidMount() {
    this.setup(this.props);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.router.location.pathname !== this.props.router.location.pathname) {
      this.setup(this.props);
    }
  }

  render() {
    return (
      <div className="bookContainer">
        <h1>{this.props.selectedBook}</h1>
        <hr />
        <div className="chapters">
          {toRange(this.props.availableChapters).map((n: number) => (
            <div className="chapter" key={n}>
              <Link to={`/books/${this.props.selectedBook}/chapters/${n}`}>{n}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(BookView));
