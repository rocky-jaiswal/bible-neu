import * as React from 'react';
import { connect } from 'react-redux';
import { Immutable } from 'seamless-immutable';
import { RouterState } from 'connected-react-router';

import { Dispatch, RootStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import { Verse, BookAndChapters } from '../../redux/app/types';
import { fetchVerses } from '../../redux/app/actions';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  selectedBook: string | null;
  selectedChapter: number | null;
  selectedVerses: Immutable<Verse[]>;
  selectedLanguage: LocaleEnum;
  router: RouterState;
}

interface DispatchProps {
  fetchVerses(payload: BookAndChapters): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    selectedBook: state.app.selectedBook,
    selectedChapter: state.app.selectedChapter,
    selectedVerses: state.app.selectedVerses,
    selectedLanguage: state.app.locale,
    router: state.router!
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchVerses: (payload: BookAndChapters) => dispatch(fetchVerses(payload))
  };
};

export class ChapterView extends React.Component<Props & DispatchProps> {

  setup(props: Props) {
    const path = props.router.location.pathname;
    const split = path.split('/');
    this.props.fetchVerses({ book: split[2], chapter: parseInt(split[4], 10) });
  }

  componentDidMount() {
    this.setup(this.props);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.router.location.pathname !== this.props.router.location.pathname) {
      this.setup(this.props);
    }
  }

  displayVerses() {
    return this.props.selectedVerses
      .filter((verse) => verse.language === this.props.selectedLanguage)
      .map((verse) => (
        <tr key={`${verse.language}-${verse.verseNumber}`}>
          <td>{verse.verseNumber}</td>
          <td>{verse.text}</td>
        </tr>
      ));
  }

  render() {
    return (
      <div className="chapterContainer">
        <h1>{this.props.selectedBook} {this.props.selectedChapter}</h1>
        <hr />
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
