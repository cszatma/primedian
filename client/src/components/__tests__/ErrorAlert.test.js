import { shallow } from 'enzyme';

import ErrorAlert from '../ErrorAlert';
import { serverErrors } from '../../utils/ErrorTypes';

describe('ErrorAlert tests', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <ErrorAlert
        error={{
          type: serverErrors.missingParameter,
          message: 'Missing parameter n.',
        }}
      />,
    );

    expect(wrapper).toHaveLength(1);
  });
});
