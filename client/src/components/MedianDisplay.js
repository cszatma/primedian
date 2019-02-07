import React from 'react';
import { Fade, Jumbotron, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

const MedianDisplay = ({ median }) => {
  const singleMedian = median.length === 1;
  const header = singleMedian
    ? 'The Median Prime is:'
    : 'The Median Primes are:';
  const medianText = singleMedian ? median[0] : `${median[0]}, ${median[1]}`;

  return (
    <Fade in={true}>
      <Jumbotron className="py-4">
        <Container>
          <Row>
            <h4>{header}</h4>
            <h4 className="px-2">{medianText}</h4>
          </Row>
        </Container>
      </Jumbotron>
    </Fade>
  );
};

MedianDisplay.propTypes = {
  median: PropTypes.array.isRequired,
};

export default MedianDisplay;
