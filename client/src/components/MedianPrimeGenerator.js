import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import InputForm from './InputForm';
import ResultDisplay from './ResultDisplay';

export default class MedianPrimeGenerator extends Component {
  state = {
    isLoading: false,
    median: undefined,
    error: undefined,
  };

  handleFormSubmit = upperLimit => {
    this.setState({ isLoading: true, median: undefined, error: undefined });

    axios
      .get(`/api/median-prime?n=${upperLimit}`)
      .then(res => {
        this.setState({ isLoading: false, median: res.data });
      })
      .catch(err => {
        const { error } = err.response.data;
        this.setState({ isLoading: false, error });
      });
  };

  render() {
    return (
      <Container className="d-flex flex-column">
        <h2>Find the Median Prime</h2>
        <InputForm className="my-3" onSubmit={this.handleFormSubmit} />
        <ResultDisplay {...this.state} />
      </Container>
    );
  }
}
