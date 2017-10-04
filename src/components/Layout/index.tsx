import * as React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RightSidebar from '../../components/RightSidebar';

import { ActionType } from '../../constants/types';
import { LocaleEnum, SidebarView } from '../../constants/enums';

import './styles.css';

interface Props {
  loading: boolean;
  sidebarLoading: boolean;
  selectedLocale: LocaleEnum;
  sidebarView: SidebarView;
  bookNames: string[];
  selectedBook?: string;
  selectedChapter?: number;
  availableChapters: number[];
  children: React.ReactElement<{}>;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
  toggleRightSidebar(): ActionType<string>;
  switchSidebarView(): ActionType<void>;
}

const Layout: React.SFC<Props> = (props) => {

  return (
    <div className="container">
      <Header
        loading={props.sidebarLoading || props.loading}
        toggleRightSidebar={props.toggleRightSidebar}
      />
      <div className="main">
        {props.children}
        <RightSidebar
          selectedLocale={props.selectedLocale}
          bookNames={props.bookNames}
          rightSidebarVisible={props.rightSidebarVisible}
          sidebarLoading={props.sidebarLoading}
          sidebarView={props.sidebarView}
          selectedBook={props.selectedBook}
          selectedChapter={props.selectedChapter}
          availableChapters={props.availableChapters}
          switchLanguage={props.switchLanguage}
          switchSidebarView={props.switchSidebarView}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
