import React, { Component } from 'react';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

export default class InputForm extends Component {
  state = {
    upperLimit: 0,
    invalid: false,
  };

  handleInputChange = event => {
    const upperLimit = Number(event.target.value);
    this.setState({ upperLimit, invalid: !upperLimit });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const upperLimit = this.state.upperLimit;

    if (!upperLimit) {
      this.setState({ invalid: true });
    } else {
      this.props.onSubmit(upperLimit);
    }
  };

  render() {
    return (
      <Form className={this.props.className} onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="upperLimit">Upper Limit</Label>
          <Input
            type="text"
            name="upperLimit"
            id="upperLimit"
            min="2"
            placeholder="Enter a postive integer between 2 and 100 million"
            invalid={this.state.invalid}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button>Calculate</Button>
      </Form>
    );
  }
}

InputForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
