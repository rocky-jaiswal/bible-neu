import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType, Verse } from '../../constants/types';
import { fetchEnBible, fetchDeBible } from '../../redux/app/actions';

import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  deBible: Verse[];
  enBible: Verse[];
}

interface DispatchProps {
  fetchEnBible(): ActionType<{}>;
  fetchDeBible(): ActionType<{}>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    deBible: state.app.deBible,
    enBible: state.app.enBible
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchDeBible: () => dispatch(fetchDeBible()),
    fetchEnBible: () => dispatch(fetchEnBible())
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.fetchDeBible();
    this.props.fetchEnBible();
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1 className="title">
          <FormattedMessage id="root.heading" />
        </h1>
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Root));
