import * as React from 'react';
import { Immutable } from 'seamless-immutable';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { Verse } from '../../redux/app/types';
import {
  queryChapters,
  setCurrentBook,
  setCurrentChapter,
  toggleRightSidebar,
} from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  selectedBook: string | null;
  selectedChapter: number | null;
  selectedVerses: Immutable<Verse[]>;
}

interface DispatchProps {
  setCurrentBook(payload: string): void;
  setCurrentChapter(payload: number): void;
  queryChapters(): void;
  toggleRightSidebar(): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    selectedBook: state.app.selectedBook,
    selectedChapter: state.app.selectedChapter,
    selectedVerses: state.app.selectedVerses
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setCurrentBook: (payload: string) => dispatch(setCurrentBook(payload)),
    setCurrentChapter: (payload: number) => dispatch(setCurrentChapter(payload)),
    queryChapters: () => dispatch(queryChapters()),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export class ChapterView extends React.Component<Props & DispatchProps> {

  // componentDidMount() {
  //   this.props.setCurrentBook(this.props.match.params.book);
  //   this.props.setCurrentChapter(this.props.match.params.chapter);
  //   this.props.queryAvailableChapters();
  //   this.props.queryCurrentVerses();
  // }

  // componentWillReceiveProps(nextProps: Props) {
  //   const newBook = nextProps.match.params.book;
  //   const newChapter = nextProps.match.params.chapter;
  //   if (newBook !== this.props.selectedBook ||
  //     newChapter !== this.props.selectedChapter) {
  //       this.props.setCurrentBook(this.props.match.params.book);
  //       this.props.setCurrentChapter(this.props.match.params.chapter);
  //       this.props.queryAvailableChapters();
  //       this.props.queryCurrentVerses();
  //   }
  // }

  displayVerses() {
    return this.props.selectedVerses.map((verse) => {
      return (
        <tr key={verse.text}>
          <td>{verse.verse}</td>
          <td>{verse.text}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="chapterContainer">
        <h1>{this.props.selectedBook} {this.props.selectedChapter}</h1>
        <table className="chapterDisplay">
          <tbody>
            {this.displayVerses()}
          </tbody>
        </table>
      </div>
    );
  }

}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(ChapterView));
