import * as React from 'react';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType, Verse } from '../../constants/types';
import {
  setAvailableChapters,
  setCurrentBook,
  setCurrentChapter,
  setCurrentVerses,
  toggleRightSidebar,
} from '../../redux/app/actions';

import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

interface Props {
  loading: boolean;
  selectedBook: string;
  selectedChapter: number;
  selectedVerses: Verse[];
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
    selectedChapter: state.app.selectedChapter,
    selectedVerses: state.app.selectedVerses,
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

export class ChapterView extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.book);
    this.props.setCurrentChapter(this.props.match.params.chapter);
    this.props.setAvailableChapters();
    this.props.setCurrentVerses();
  }

  componentWillReceiveProps(nextProps: Props) {
    const newBook = nextProps.match.params.book;
    const newChapter = nextProps.match.params.chapter;
    if (newBook !== this.props.selectedBook ||
      newChapter !== this.props.selectedChapter) {
        this.props.setCurrentBook(this.props.match.params.book);
        this.props.setCurrentChapter(this.props.match.params.chapter);
        this.props.setAvailableChapters();
        this.props.setCurrentVerses();
    }
  }

  displayVerses() {
    return this.props.selectedVerses.map((verse, idx) => {
      return (
        <div key={idx}>
          <span>{verse.verse} - </span>
          <span>{verse.text}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1>{this.props.selectedBook}</h1>
        <h2>{this.props.selectedChapter}</h2>
        {this.displayVerses()}
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(ChapterView));
