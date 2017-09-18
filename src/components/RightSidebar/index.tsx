import * as React from 'react';

import ChapterList from '../ChapterList';
import LanguageSwitcher from '../LanguageSwitcher';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  deBookNames: string[];
  enBookNames: string[];
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
}

const RightSidebar: React.SFC<Props> = (props) => {
  return (
    <div className={props.rightSidebarVisible ? 'rightSidebar' : 'hidden'}>
      <LanguageSwitcher switchLanguage={props.switchLanguage} />
      <ChapterList
        selectedLocale={props.selectedLocale}
        deBookNames={props.deBookNames}
        enBookNames={props.enBookNames}
      />
    </div>
  );
};

export default RightSidebar;
