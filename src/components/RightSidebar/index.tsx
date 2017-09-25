import * as React from 'react';

import BookList from '../BookList';
import ChapterList from '../ChapterList';
import LanguageSwitcher from '../LanguageSwitcher';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  deBookNames: string[];
  enBookNames: string[];
  selectedBook: string;
  selectedChapter: number;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
}

const RightSidebar: React.SFC<Props> = (props) => {

  const showBooksOrChapters = () => {
    if (props.selectedBook) {
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
          chapterList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      );
    }
  };

  return (
    <div className={props.rightSidebarVisible ? 'rightSidebar' : 'hidden'}>
      <LanguageSwitcher switchLanguage={props.switchLanguage} />
      {showBooksOrChapters()}
    </div>
  );
};

export default RightSidebar;
