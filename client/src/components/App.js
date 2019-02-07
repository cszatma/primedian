import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import styles from '../styles/App.module.scss';
import MedianPrimeGenerator from './MedianPrimeGenerator';

class App extends Component {
  render() {
    return (
      <div>
        <Container className={styles.AppContainer}>
          <Row className="justify-content-center">
            <Col lg="8" md="6" sm="8" xs="8">
              <header className="my-3">
                <Container>
                  <h1>PriMedian</h1>
                </Container>
              </header>
              <MedianPrimeGenerator />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
