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
      <div className="buttonBar">
        <button className="langButton" onClick={() => props.switchLanguage(LocaleEnum.en)}>EN</button>
        <button className="langButton" onClick={() => props.switchLanguage(LocaleEnum.de)}>DE</button>
      </div>
    </div>
  );
};

export default RightSidebar;
