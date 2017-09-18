import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import Layout from '../../components/Layout';
import { ActionType, Dispatch, RootStateType, Verse } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import { switchLanguage, toggleRightSidebar } from '../../redux/app/actions';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  deBible: Verse[];
  enBible: Verse[];
}

interface DispatchProps {
  switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum>;
  toggleRightSidebar(): ActionType<string>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    locale: state.app.locale,
    rightSidebarVisible: state.app.rightSidebarVisible,
    deBible: state.app.deBible,
    enBible: state.app.enBible
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    switchLanguage: (payload: LocaleEnum) => dispatch(switchLanguage(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

const bookNames = (verses: Verse[]): string[] => {

  return _.uniq(verses.map(v => v.book));
};

// tslint:disable-next-line:no-any
export const wrapped = (WrappedComponent: any): any => {

  class Wrapper extends React.Component<Props & DispatchProps> {

    render() {
      return (
        <Layout
          deBookNames={bookNames(this.props.deBible)}
          enBookNames={bookNames(this.props.enBible)}
          selectedLocale={this.props.locale}
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
