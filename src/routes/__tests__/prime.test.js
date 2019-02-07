const request = require('supertest');

const app = require('../../app');
const { errorTypes } = require('../../middlewares/error-handlers');

describe('/api/median-prime route tests', () => {
  const path = '/api/median-prime';

  it('should respond with [3, 5]', () => {
    return request(app)
      .get(`${path}?n=10`)
      .expect(200, [3, 5]);
  });

  it('should respond with [7]', () => {
    return request(app)
      .get(`${path}?n=18`)
      .expect(200, [7]);
  });

  it('should respond with an error since n is not provided', () => {
    return request(app)
      .get(path)
      .expect(400, {
        error: {
          type: errorTypes.missingParameter,
          message: 'Query parameter n was not provided.',
        },
      });
  });

  it('should respond with an error since n is not a positive integer', () => {
    return request(app)
      .get(`${path}?n=a`)
      .expect(400, {
        error: {
          type: errorTypes.invalidParameterType,
          message: 'Query parameter n must be a positive integer.',
        },
      });
  });

  it('should respond with an error since n is less than 3', () => {
    return request(app)
      .get(`${path}?n=2`)
      .expect(400, {
        error: {
          type: errorTypes.invalidValue,
          message: 'Query parameter n must be greater than 2.',
        },
      });
  });
});
