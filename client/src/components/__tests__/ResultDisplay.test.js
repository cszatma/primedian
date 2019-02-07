import React from 'react';
import { shallow, mount } from 'enzyme';
import { Spinner } from 'reactstrap';

import ResultDisplay from '../ResultDisplay';
import { serverErrors } from '../../utils/ErrorTypes';
import ErrorAlert from '../ErrorAlert';
import MedianDisplay from '../MedianDisplay';

describe('ResultDisplay tests', () => {
  it('should render the component', () => {
    const wrapper = shallow(<ResultDisplay />);
    expect(wrapper).toHaveLength(1);
  });

  it('should be null since no props were passed', () => {
    const wrapper = shallow(<ResultDisplay />);
    expect(wrapper.type()).toBeNull();
  });

  it('should render a Spinner', () => {
    const wrapper = mount(<ResultDisplay isLoading={true} />);
    const spinner = wrapper.find(Spinner);

    expect(wrapper.props().isLoading).toBe(true);
    expect(spinner).toHaveLength(1);
  });

  it('should render an ErrorAlert', () => {
    const wrapper = mount(
      <ResultDisplay
        error={{
          type: serverErrors.missingParameter,
          message: 'Missing parameter n.',
        }}
      />,
    );
    const hasAlert = wrapper.contains(
      <ErrorAlert
        error={{
          type: serverErrors.missingParameter,
          message: 'Missing parameter n.',
        }}
      />,
    );

    expect(wrapper.props().error).toEqual({
      type: serverErrors.missingParameter,
      message: 'Missing parameter n.',
    });
    expect(hasAlert).toBe(true);
  });

  it('should render a MedianDisplay', () => {
    const wrapper = mount(<ResultDisplay median={[5]} />);
    const hasMedianDisplay = wrapper.contains(<MedianDisplay median={[5]} />);

    expect(wrapper.props().median).toEqual([5]);
    expect(hasMedianDisplay).toBe(true);
  });
});
