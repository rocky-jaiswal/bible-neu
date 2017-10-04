import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { SidebarView } from '../../constants/enums';
import { fetchDeBible, fetchEnBible, queryBooks, setSidebarView } from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  deBibleLoaded: boolean;
  enBibleLoaded: boolean;
}

interface DispatchProps {
  fetchEnBible(): ActionType<{}>;
  fetchDeBible(): ActionType<{}>;
  queryBooks(): ActionType<void>;
  setSidebarView(payload: SidebarView): ActionType<SidebarView>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    deBibleLoaded: state.app.deBibleLoaded,
    enBibleLoaded: state.app.enBibleLoaded
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchDeBible: () => dispatch(fetchDeBible()),
    fetchEnBible: () => dispatch(fetchEnBible()),
    queryBooks: () => dispatch(queryBooks()),
    setSidebarView: (payload: SidebarView) => dispatch(setSidebarView(payload))
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (!this.props.deBibleLoaded) {
      this.props.fetchDeBible();
    }
    if (!this.props.enBibleLoaded) {
      this.props.fetchEnBible();
    }
    this.props.queryBooks();
    this.props.setSidebarView(SidebarView.BOOKS);
  }

  render() {
    return (
      <div className="rootContainer">
        <h1 className="title">
          <FormattedMessage id="root.heading" />
        </h1>
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Root));
