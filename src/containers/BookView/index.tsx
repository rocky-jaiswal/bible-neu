import * as React from 'react';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import {
  setAvailableChapters,
  setCurrentBook,
  setCurrentChapter,
  setCurrentVerses,
  toggleRightSidebar,
} from '../../redux/app/actions';

import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  selectedBook: string;
  // tslint:disable-next-line:no-any
  match: any;
}

interface DispatchProps {
  setCurrentBook(payload: string): ActionType<string>;
  setCurrentChapter(payload: number): ActionType<number>;
  setAvailableChapters(): ActionType<void>;
  setCurrentVerses(): ActionType<void>;
  toggleRightSidebar(): ActionType<never>;
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loading: state.app.loading,
    selectedBook: state.app.selectedBook,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setCurrentBook: (payload: string) => dispatch(setCurrentBook(payload)),
    setCurrentChapter: (payload: number) => dispatch(setCurrentChapter(payload)),
    setAvailableChapters: () => dispatch(setAvailableChapters()),
    setCurrentVerses: () => dispatch(setCurrentVerses()),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export class BookView extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.book);
    this.props.setCurrentChapter(1);
    this.props.setAvailableChapters();
    this.props.setCurrentVerses();
  }

  componentWillReceiveProps(nextProps: Props) {
    const newBook = nextProps.match.params.book;
    if (newBook !== this.props.selectedBook) {
        this.props.setCurrentBook(this.props.match.params.book);
        this.props.setAvailableChapters();
        this.props.setCurrentChapter(1);
        this.props.setCurrentVerses();
    }
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1>Book View</h1>
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(BookView));
