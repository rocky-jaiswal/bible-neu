import { shallow } from 'enzyme';
import * as React from 'react';

import LoadingSpinner from '../';

describe('<LoadingSpinner />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <LoadingSpinner visible={true}/>
    );
    expect(wrapper).toBeTruthy();
  });

  test('is working', () => {
    const wrapper = shallow(
      <LoadingSpinner visible={false}/>
    );
    expect(wrapper.find('.hidden').length).toEqual(1);
  });

});
