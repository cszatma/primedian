import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';

import ErrorAlert from './ErrorAlert';
import MedianDisplay from './MedianDisplay';

const ResultDisplay = ({ median, isLoading, error }) => {
  if (isLoading) {
    return <Spinner className="py-2 align-self-center" color="secondary" />;
  } else if (error) {
    return <ErrorAlert error={error} />;
  } else if (median) {
    return <MedianDisplay median={median} />;
  } else {
    return null;
  }
};

ResultDisplay.propTypes = {
  median: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.shape({
    type: PropTypes.number,
    message: PropTypes.string,
  }),
};

export default ResultDisplay;
