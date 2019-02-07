import React from 'react';
import { shallow, mount } from 'enzyme';

import MedianDisplay from '../MedianDisplay';

describe('MedianDisplay tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MedianDisplay median={[5]} />);
  });

  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have median as a prop', () => {
    wrapper = mount(<MedianDisplay median={[5]} />);
    expect(wrapper.props().median).toEqual([5]);
  });
});
