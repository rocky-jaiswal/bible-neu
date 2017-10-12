import LoadingSpinner from '../LoadingSpinner';
import * as React from 'react';

import BookList from '../BookList';
import ChapterList from '../ChapterList';
import LanguageSwitcher from '../LanguageSwitcher';
import SidebarViewSwitcher from '../SidebarViewSwitcher';

import { ActionType } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';
import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  sidebarLoading: boolean;
  sidebarView: SidebarView;
  bookNames: string[];
  selectedBook: string | null;
  selectedChapter: number | null;
  availableChapters: number[];
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
  switchSidebarView(): ActionType<void>;
}

const RightSidebar: React.SFC<Props> = (props) => {

  const showBooksOrChapters = () => {
    if (props.selectedBook && props.sidebarView === SidebarView.CHAPTERS) {
      return (
        <ChapterList
          selectedBook={props.selectedBook}
          chapterList={props.availableChapters}
        />
      );
    } else {
      return (
        <BookList
          bookNames={props.bookNames}
        />
      );
    }
  };

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
          />
          <SidebarViewSwitcher
            switchSidebarView={props.switchSidebarView}
          />
          {showBooksOrChapters()}
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
