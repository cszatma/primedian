const {
  errorTypes,
  handleErrorType,
  handleUncaughtError,
} = require('../error-handlers');

describe('Error Handler Middlewares tests', () => {
  let req;
  let res;
  const next = jest.fn();

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      data: null,
      statusCode: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.data = JSON.stringify(data);
      },
    };

    next.mockClear();
  });

  describe('handleErrorType tests', () => {
    it('should handle a missing parameter error', () => {
      const message = 'Parameter n missing.';
      const err = new Error(message);
      err.type = errorTypes.missingParameter;

      handleErrorType(err, req, res, next);

      expect(res.statusCode).toBe(400);
      expect(JSON.parse(res.data)).toEqual({
        error: {
          type: errorTypes.missingParameter,
          message,
        },
      });
      expect(next.mock.calls.length).toBe(0);
    });

    it('should handle a invalid parameter type error', () => {
      const message = 'n must be a number';
      const err = new Error(message);
      err.type = errorTypes.invalidParameterType;

      handleErrorType(err, req, res, next);

      expect(res.statusCode).toBe(400);
      expect(JSON.parse(res.data)).toEqual({
        error: {
          type: errorTypes.invalidParameterType,
          message,
        },
      });
      expect(next.mock.calls.length).toBe(0);
    });

    it('should call next with the error since the type does not match any known type', () => {
      const err = new Error('Any error occurred');
      err.type = 10;

      handleErrorType(err, req, res, next);

      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toBe(err);
    });

    it('should call next since type is undefined', () => {
      const err = new Error('An error occurred');
      handleErrorType(err, req, res, next);

      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toBe(err);
    });
  });

  describe('handleUncaughtError tests', () => {
    it('should respond with a status of 500 and an error object', () => {
      const err = new Error('An error occurred');
      handleUncaughtError(err, req, res, next);

      expect(res.statusCode).toBe(500);
      expect(JSON.parse(res.data)).toEqual({
        error: {
          message: err.message,
        },
      });
    });
  });
});
