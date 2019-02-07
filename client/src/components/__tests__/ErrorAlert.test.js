import React from 'react';
import { shallow, mount } from 'enzyme';
import { Alert } from 'reactstrap';

import ErrorAlert from '../ErrorAlert';
import { serverErrors } from '../../utils/ErrorTypes';

describe('ErrorAlert tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ErrorAlert
        error={{
          type: serverErrors.missingParameter,
          message: 'Missing parameter n.',
        }}
      />,
    );
  });

  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have the error as a prop', () => {
    // Full rendering required to be able to access props
    wrapper = mount(
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
  });

  it('should render an Alert', () => {
    expect(
      wrapper.containsMatchingElement(
        <Alert color="danger">Please enter a valid upper limit.</Alert>,
      ),
    ).toBe(true);
  });
});
