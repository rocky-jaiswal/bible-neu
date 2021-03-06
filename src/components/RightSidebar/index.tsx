import * as React from 'react';
import { Immutable } from 'seamless-immutable';

import { LocaleEnum } from '../../constants/enums';
import BookList from '../BookList';
import LanguageSwitcher from '../LanguageSwitcher';
import LoadingSpinner from '../LoadingSpinner';
import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  sidebarLoading: boolean;
  bookNames: Immutable<string[]>;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): void;
  toggleRightSidebar(): void;
}

const RightSidebar = (props: Props) => {

  const render = () => {
    if (props.sidebarLoading) {
      return (
        <LoadingSpinner visible={true} />
      );
    } else {
      return (
        <div>
          <LanguageSwitcher
            selectedLocale={props.selectedLocale}
            switchLanguage={props.switchLanguage}
            toggleRightSidebar={props.toggleRightSidebar}
          />
          <BookList
            bookNames={props.bookNames}
            toggleRightSidebar={props.toggleRightSidebar}
          />
        </div>
      );
    }

  };

  return (
    <div className={props.rightSidebarVisible ? 'rightSidebar' : 'hidden'}>
      {render()}
    </div>
  );
};

export default RightSidebar;
