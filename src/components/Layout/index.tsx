import * as React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RightSidebar from '../../components/RightSidebar';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  deBookNames: string[];
  enBookNames: string[];
  children: React.ReactElement<{}>;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
  toggleRightSidebar(): ActionType<string>;
}

const Layout: React.SFC<Props> = (props) => {

  return (
    <div className="container">
      <Header
        toggleRightSidebar={props.toggleRightSidebar}
      />
      <div className="main">
        {props.children}
        <RightSidebar
          selectedLocale={props.selectedLocale}
          deBookNames={props.deBookNames}
          enBookNames={props.enBookNames}
          rightSidebarVisible={props.rightSidebarVisible}
          switchLanguage={props.switchLanguage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
