import * as React from 'react';
import { RouterState } from 'connected-react-router';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import {
  setCurrentBook,
  fetchChapters
} from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  selectedBook: string | null;
  router: RouterState;
}

interface DispatchProps {
  setCurrentBook(payload: string): void;
  fetchChapters(): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    selectedBook: state.app.selectedBook,
    router: state.router!
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setCurrentBook: (payload: string) => dispatch(setCurrentBook(payload)),
    fetchChapters: () => dispatch(fetchChapters())
  };
};

export class BookView extends React.Component<Props & DispatchProps> {

  setup(props: Props) {
    const path = props.router.location.pathname;
    const book = path.split('/')[2];
    this.props.setCurrentBook(book);
    this.props.fetchChapters();
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
      </div>
    );
  }

}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(BookView));
