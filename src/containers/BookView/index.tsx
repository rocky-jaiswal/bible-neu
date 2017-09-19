import * as React from 'react';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { setCurrentBook, toggleRightSidebar } from '../../redux/app/actions';

import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  // tslint:disable-next-line:no-any
  match: any;
}

interface DispatchProps {
  setCurrentBook(payload: string): ActionType<string>;
  toggleRightSidebar(): ActionType<never>;
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: RootStateType, ownProps: any): Props => {
  return {
    loading: state.app.loading,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setCurrentBook: (payload: string) => dispatch(setCurrentBook(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export class BookView extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.setCurrentBook(this.props.match.params.book);
    // this.props.toggleRightSidebar();
  }

  render() {
    return (
      <div>
        <LoadingSpinner visible={this.props.loading} />
        <h1>Hello</h1>
      </div>
    );
  }

}

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(BookView));
