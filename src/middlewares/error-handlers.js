const errorTypes = {
  missingParameter: 1,
  invalidParameterType: 2,
  invalidValue: 3,
};

exports.errorTypes = errorTypes;

exports.handleErrorType = (err, req, res, next) => {
  if (!err.type) {
    return next(err);
  }

  // Handle known errors, otherwise pass it on to the next error handler
  switch (err.type) {
    case errorTypes.missingParameter:
      res.statusMessage = 'Query parameter is missing from url.';
      break;
    case errorTypes.invalidParameterType:
      res.statusMessage = 'Invalid parameter type provided.';
      break;
    case errorTypes.invalidValue:
      res.statusMessage = 'Invalid value assigned to parameter.';
      break;
    default:
      return next(err);
  }

  res.status(err.status || 400);
  res.json({ error: { type: err.type, message: err.message } });
};

// eslint-disable-next-line no-unused-vars
exports.handleUncaughtError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
};
