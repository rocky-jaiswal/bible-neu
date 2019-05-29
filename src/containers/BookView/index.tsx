import * as React from 'react';
import { RouterState } from 'connected-react-router';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { SidebarView } from '../../constants/enums';
import {
  queryAvailableChapters,
  setCurrentBook,
  setCurrentChapter,
  queryCurrentVerses,
  toggleRightSidebar,
  setSidebarView
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
  setCurrentChapter(payload: number): void;
  queryAvailableChapters(): void;
  queryCurrentVerses(): void;
  toggleRightSidebar(): void;
  setSidebarView(payload: SidebarView): void;
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
    setCurrentChapter: (payload: number) => dispatch(setCurrentChapter(payload)),
    queryAvailableChapters: () => dispatch(queryAvailableChapters()),
    queryCurrentVerses: () => dispatch(queryCurrentVerses()),
    toggleRightSidebar: () => dispatch(toggleRightSidebar()),
    setSidebarView: (payload: SidebarView) => dispatch(setSidebarView(payload))
  };
};

export class BookView extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.setCurrentBook(this.props.match.params.book);
    // console.log(this.props.router.location.pathname.match(/^books\/(.*)/));

    this.props.setCurrentChapter(1);
    this.props.setSidebarView(SidebarView.CHAPTERS);
    this.props.queryAvailableChapters();
    this.props.queryCurrentVerses();
  }

  // componentWillReceiveProps(nextProps: Props) {
  //   const newBook = nextProps.match.params.book;
  //   if (newBook !== this.props.selectedBook) {
  //       this.props.setCurrentBook(this.props.match.params.book);
  //       this.props.setCurrentChapter(1);
  //       this.props.queryAvailableChapters();
  //       this.props.queryCurrentVerses();
  //   }
  // }

  render() {
    return (
      <div className="bookContainer">
        <h1>{this.props.selectedBook}</h1>
      </div>
    );
  }

}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(BookView));
