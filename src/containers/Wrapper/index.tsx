import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';
import { switchSidebarView, switchLanguage, toggleRightSidebar } from '../../redux/app/actions';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  loading: boolean;
  rightSidebarVisible: boolean;
  sidebarLoading: boolean;
  sidebarView: SidebarView;
  books: string[];
  selectedBook: string | null;
  selectedChapter: number | null;
  availableChapters: number[];
}

interface DispatchProps {
  switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum>;
  toggleRightSidebar(): ActionType<never>;
  switchSidebarView(): ActionType<void>;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    locale: state.app.locale,
    loading: state.app.loading,
    rightSidebarVisible: state.app.rightSidebarVisible,
    sidebarLoading: state.app.sidebarLoading,
    sidebarView: state.app.sidebarView,
    books: state.app.books.asMutable(),
    selectedBook: state.app.selectedBook,
    selectedChapter: state.app.selectedChapter,
    availableChapters: state.app.availableChapters.asMutable()
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    switchLanguage: (payload: LocaleEnum) => dispatch(switchLanguage(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar()),
    switchSidebarView: () => dispatch(switchSidebarView())
  };
};

// tslint:disable-next-line:no-any
export const wrapped = (WrappedComponent: any): any => {

  class Wrapper extends React.Component<Props & DispatchProps> {

    render() {
      return (
        <Layout
          loading={this.props.loading}
          bookNames={this.props.books}
          selectedLocale={this.props.locale}
          rightSidebarVisible={this.props.rightSidebarVisible}
          sidebarLoading={this.props.sidebarLoading}
          sidebarView={this.props.sidebarView}
          selectedBook={this.props.selectedBook}
          selectedChapter={this.props.selectedChapter}
          switchLanguage={this.props.switchLanguage}
          availableChapters={this.props.availableChapters}
          toggleRightSidebar={this.props.toggleRightSidebar}
          switchSidebarView={this.props.switchSidebarView}
        >
          <WrappedComponent />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};
