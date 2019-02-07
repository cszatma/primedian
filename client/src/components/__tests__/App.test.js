import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import MedianPrimeGenerator from '../MedianPrimeGenerator';

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a MedianPrimeGenerator', () => {
    expect(wrapper.contains(<MedianPrimeGenerator />)).toBe(true);
  });
});
