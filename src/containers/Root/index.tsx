import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { fetchInfo, incrementCounter } from '../../redux/app/actions';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  counter: number;
  loading: boolean;
}

interface DispatchProps {
  incrementCounter(): ActionType<{}>;
  fetchInfo(): ActionType<string>;
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    counter: state.app.counter,
    loading: state.app.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    fetchInfo: () => dispatch(fetchInfo())
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.fetchInfo();
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1 className="title">
          <FormattedMessage id="root.heading" />
        </h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Root));
