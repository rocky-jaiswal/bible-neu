import { shallow } from 'enzyme';
import * as React from 'react';

import ErrorMessage from '../';

describe('<ErrorMessage />', () => {

  test('displays without errors', () => {
    const wrapper = shallow(
      <ErrorMessage
        message={'foo'}
      />
    );
    expect(wrapper).toBeTruthy();
  });

});
