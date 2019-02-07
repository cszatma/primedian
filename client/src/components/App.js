import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import styles from '../styles/App.module.scss';
import MedianPrimeGenerator from './MedianPrimeGenerator';

class App extends Component {
  render() {
    return (
      <Container className={styles.AppContainer}>
        <Row className="justify-content-center">
          <Col xl="8" lg="8" md="10" sm="10">
            <header className="my-3">
              <Container>
                <h1>PriMedian</h1>
              </Container>
            </header>
            <MedianPrimeGenerator />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
