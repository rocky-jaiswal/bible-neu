import { shallow } from 'enzyme';
import * as React from 'react';

import { LocaleEnum, SidebarView } from '../../../constants/enums';
import Layout from '../';

describe('<Layout />', () => {

  test('shows the right components', () => {
    const wrapper = shallow(
      <Layout
        loading={false}
        selectedLocale={LocaleEnum.de}
        sidebarView={SidebarView.BOOKS}
        bookNames={[]}
        children={<div/>}
        rightSidebarVisible={true}
        sidebarLoading={true}
        selectedBook={'Gen'}
        selectedChapter={1}
        availableChapters={[1, 2]}
        switchLanguage={jest.fn()}
        toggleRightSidebar={jest.fn()}
        switchSidebarView={jest.fn()}
      />
    );
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('RightSidebar').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

});
