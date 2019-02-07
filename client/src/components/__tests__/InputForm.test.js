import React from 'react';
import { shallow } from 'enzyme';
import { Form, Input, Button } from 'reactstrap';

import InputForm from '../InputForm';

describe('InputForm tests', () => {
  let wrapper;
  const onSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<InputForm onSubmit={onSubmit} />);
    onSubmit.mockClear();
  });

  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have an initial state', () => {
    expect(wrapper.state()).toEqual({
      upperLimit: 0,
      invalid: false,
    });
  });

  it('should render a form with an input and a button', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should modify the state on input change', () => {
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: '10' } });
    expect(wrapper.state().upperLimit).toBe(10);
  });

  it('should should set invalid state to true', () => {
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 'a' } });
    expect(wrapper.state().invalid).toBe(true);
  });

  it('should call the onSubmit prop when submitted', () => {
    const form = wrapper.find(Form);
    wrapper.setState({ upperLimit: 10 });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(onSubmit.mock.calls).toHaveLength(1);
    expect(onSubmit.mock.calls[0][0]).toBe(10);
  });
});
