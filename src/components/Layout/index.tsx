import * as React from 'react';
import { Immutable } from 'seamless-immutable';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RightSidebar from '../../components/RightSidebar';

import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  loading: boolean;
  selectedLocale: LocaleEnum;
  bookNames: Immutable<string[]>;
  children: React.ReactElement<{}>;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): void;
  toggleRightSidebar(): void;
}

const Layout = (props: Props) => {

  return (
    <div className="container">
      <Header
        loading={props.loading}
        toggleRightSidebar={props.toggleRightSidebar}
      />
      <div className="main">
        {props.children}
        <RightSidebar
          selectedLocale={props.selectedLocale}
          bookNames={props.bookNames}
          rightSidebarVisible={props.rightSidebarVisible}
          sidebarLoading={props.loading}
          switchLanguage={props.switchLanguage}
          toggleRightSidebar={props.toggleRightSidebar}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
