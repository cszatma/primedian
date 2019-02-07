import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MedianPrimeGenerator from '../MedianPrimeGenerator';
import waitUntil from 'async-wait-until';

describe('MedianPrimeGenerator tests', () => {
  let wrapper;
  let mock;

  beforeEach(() => {
    wrapper = shallow(<MedianPrimeGenerator />);
    mock = new MockAdapter(axios);
    mock.onGet('/api/median-prime?n=0').reply(400, {
      error: {
        type: 2,
        message: 'Query parameter n must be a positive integer.',
      },
    });

    mock.onGet('/api/median-prime?n=10').reply(200, [3, 5]);
  });

  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have a initial state', () => {
    expect(wrapper.state().isLoading).toBe(false);
    expect(wrapper.state().median).toBeUndefined();
    expect(wrapper.state().error).toBeUndefined();
  });

  it('should fetch the median from the server', async done => {
    wrapper.instance().handleFormSubmit(10);

    // Ensure that the api call completes and the state is updated
    await waitUntil(() => !!wrapper.state().median);

    expect(wrapper.state().median).toEqual([3, 5]);

    done();
  });

  it('should get an error from the server', async done => {
    wrapper.instance().handleFormSubmit(0);

    await waitUntil(() => !!wrapper.state().error);

    expect(wrapper.state().error).toEqual({
      type: 2,
      message: 'Query parameter n must be a positive integer.',
    });

    done();
  });
});
