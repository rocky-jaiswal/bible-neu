import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { SidebarView } from '../../constants/enums';
import { fetchBooks, setSidebarView } from '../../redux/app/actions';

import { wrapped } from '../Wrapper';

import './styles.css';

interface Props {
  loading: boolean;
  bibleLoaded: boolean;
}

interface DispatchProps {
  fetchBooks(): void;
  setSidebarView(payload: SidebarView): ActionType<SidebarView>;
}

const mapStateToProps = (state: RootStateType): Props => {
  return {
    loading: state.app.loading,
    bibleLoaded: state.app.books.length > 0
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    setSidebarView: (payload: SidebarView) => dispatch(setSidebarView(payload))
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (!this.props.bibleLoaded) {
      this.props.fetchBooks();
    }
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

export default wrapped(connect(mapStateToProps, mapDispatchToProps)(Root));
