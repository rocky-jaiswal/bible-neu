import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { RootStateType, ActionType, Dispatch } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import { switchLanguage, toggleRightSidebar } from '../../redux/app/actions';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
}

interface DispatchProps {
  switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum>;
  toggleRightSidebar(): ActionType<string>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}) => {
  return {
    locale: state.app.locale,
    rightSidebarVisible: state.app.rightSidebarVisible
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
          rightSidebarVisible={this.props.rightSidebarVisible}
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
