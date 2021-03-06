import * as React from 'react';
import { Immutable } from 'seamless-immutable';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { fetchBooksAndChapters, toggleRightSidebar } from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';
import BookList from '../../components/BookList';

interface Props {
  loading: boolean;
  books: Immutable<string[]>;
}

interface DispatchProps {
  fetchBooksAndChapters(): void;
  toggleRightSidebar(): void;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    books: state.app.books
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchBooksAndChapters: () => dispatch(fetchBooksAndChapters()),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.fetchBooksAndChapters();
  }

  render() {
    return (
      <div className="rootContainer">
        <BookList bookNames={this.props.books} grid={true} toggleRightSidebar={this.props.toggleRightSidebar} />
      </div>
    );
  }

}

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(Root));
