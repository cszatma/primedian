import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import { serverErrors } from '../utils/ErrorTypes';

const ErrorAlert = ({ error }) => {
  let message;

  switch (error.type) {
    case serverErrors.missingParameter:
      message = 'Please enter a valid upper limit.';
      break;
    case serverErrors.invalidParameterType:
      message = 'Please enter a valid positive integer as the upper limit.';
      break;
    case serverErrors.invalidValue:
      message =
        'Please enter a number ' +
        (error.message.includes('2')
          ? 'greater than 2.'
          : 'less than 100 million.');
      break;
    default:
      message = 'An error occurred. Please try again.';
      break;
  }

  return <Alert color="danger">{message}</Alert>;
};

ErrorAlert.propTypes = {
  error: PropTypes.shape({
    type: PropTypes.number,
    message: PropTypes.string,
  }).isRequired,
};

export default ErrorAlert;
