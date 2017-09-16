import { shallow } from 'enzyme';
import * as React from 'react';

import RightSidebar from '../';

describe('<RightSidebar />', () => {

  test('displays when needed', () => {
    const wrapper = shallow(
      <RightSidebar
        rightSidebarVisible={true}
        switchLanguage={jest.fn()}
      />
    );
    expect(wrapper.find('.rightSidebar').length).toEqual(1);
    expect(wrapper.find('.hidden').length).toEqual(0);
  });

  test('hides when needed', () => {
    const wrapper = shallow(
      <RightSidebar
        rightSidebarVisible={false}
        switchLanguage={jest.fn()}
      />
    );
    expect(wrapper.find('.rightSidebar').length).toEqual(0);
    expect(wrapper.find('.hidden').length).toEqual(1);
  });

});
