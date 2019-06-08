import * as React from 'react';
import { connect } from 'react-redux';
import { Immutable } from 'seamless-immutable';

import Layout from '../../components/Layout';
import { Dispatch, RootStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import { switchLanguage, toggleRightSidebar } from '../../redux/app/actions';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  loading: boolean;
  rightSidebarVisible: boolean;
  sidebarLoading: boolean;
  books: Immutable<string[]>;
}

interface DispatchProps {
  switchLanguage(payload: LocaleEnum): void;
  toggleRightSidebar(): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    locale: state.app.locale,
    loading: state.app.loading,
    rightSidebarVisible: state.app.rightSidebarVisible,
    sidebarLoading: state.app.sidebarLoading,
    books: state.app.books
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    switchLanguage: (payload: LocaleEnum) => dispatch(switchLanguage(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export const wrapped = (WrappedComponent: React.ComponentClass): React.ComponentClass => {

  class Wrapper extends React.Component<Props & DispatchProps> {

    render() {
      return (
        <Layout
          loading={this.props.loading}
          bookNames={this.props.books}
          selectedLocale={this.props.locale}
          rightSidebarVisible={this.props.rightSidebarVisible}
          sidebarLoading={this.props.sidebarLoading}
          switchLanguage={this.props.switchLanguage}
          toggleRightSidebar={this.props.toggleRightSidebar}
        >
          <WrappedComponent />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};
