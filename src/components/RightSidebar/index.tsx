import LanguageSwitcher from '../LanguageSwitcher';
import * as React from 'react';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
import './styles.css';

interface Props {
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
}

const RightSidebar: React.SFC<Props> = (props) => {
  return (
    <div className={props.rightSidebarVisible ? 'rightSidebar' : 'hidden'}>
      <LanguageSwitcher switchLanguage={props.switchLanguage} />
    </div>
  );
};

export default RightSidebar;
