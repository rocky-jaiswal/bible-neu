import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { fetchBooksAndChapters } from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
}

interface DispatchProps {
  fetchBooksAndChapters(): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchBooksAndChapters: () => dispatch(fetchBooksAndChapters())
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.fetchBooksAndChapters();
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

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(Root));
