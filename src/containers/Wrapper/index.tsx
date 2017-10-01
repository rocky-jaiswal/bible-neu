import * as React from 'react';
import { connect } from 'react-redux';
// import * as _ from 'lodash';

import Layout from '../../components/Layout';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import { switchLanguage, toggleRightSidebar } from '../../redux/app/actions';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  books: string[];
  selectedBook?: string;
  selectedChapter?: number;
  availableChapters: number[];
  // tslint:disable-next-line:no-any
  match: any;
}

interface DispatchProps {
  switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum>;
  toggleRightSidebar(): ActionType<never>;
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    locale: state.app.locale,
    rightSidebarVisible: state.app.rightSidebarVisible,
    books: state.app.books,
    selectedBook: state.app.selectedBook,
    selectedChapter: state.app.selectedChapter,
    availableChapters: state.app.availableChapters,
    match: ownProps.match
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    switchLanguage: (payload: LocaleEnum) => dispatch(switchLanguage(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

// tslint:disable-next-line:no-any
export const wrapped = (WrappedComponent: any): any => {

  class Wrapper extends React.Component<Props & DispatchProps> {

    render() {
      return (
        <Layout
          deBookNames={this.props.books}
          enBookNames={this.props.books}
          selectedLocale={this.props.locale}
          rightSidebarVisible={this.props.rightSidebarVisible}
          selectedBook={this.props.selectedBook}
          selectedChapter={this.props.selectedChapter}
          switchLanguage={this.props.switchLanguage}
          availableChapters={this.props.availableChapters}
          toggleRightSidebar={this.props.toggleRightSidebar}
        >
          <WrappedComponent match={this.props.match}/>
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};
