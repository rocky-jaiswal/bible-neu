import LoadingSpinner from '../LoadingSpinner';
import * as React from 'react';

import BookList from '../BookList';
import ChapterList from '../ChapterList';
import LanguageSwitcher from '../LanguageSwitcher';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  sidebarLoading: boolean;
  deBookNames: string[];
  enBookNames: string[];
  selectedBook?: string;
  selectedChapter?: number;
  availableChapters: number[];
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
}

const RightSidebar: React.SFC<Props> = (props) => {

  const showBooksOrChapters = () => {
    if (!props.selectedBook) {
      return (
        <BookList
          selectedLocale={props.selectedLocale}
          deBookNames={props.deBookNames}
          enBookNames={props.enBookNames}
        />
      );
    } else {
      return (
        <ChapterList
          selectedBook={props.selectedBook}
          chapterList={props.availableChapters}
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
          <LanguageSwitcher switchLanguage={props.switchLanguage} />
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
