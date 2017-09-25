import * as React from 'react';
import { connect } from 'react-redux';

import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { setCurrentBook, setCurrentChapter, toggleRightSidebar } from '../../redux/app/actions';

import LoadingSpinner from '../../components/LoadingSpinner';
import { wrapped } from '../Wrapper';

interface Props {
  loading: boolean;
  // tslint:disable-next-line:no-any
  match: any;
}

interface DispatchProps {
  setCurrentBook(payload: string): ActionType<string>;
  setCurrentChapter(payload: number): ActionType<number>;
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
    setCurrentChapter: (payload: number) => dispatch(setCurrentChapter(payload)),
    toggleRightSidebar: () => dispatch(toggleRightSidebar())
  };
};

export class ChapterView extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    this.props.setCurrentChapter(this.props.match.params.chapter);
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

export default wrapped(connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(ChapterView));
