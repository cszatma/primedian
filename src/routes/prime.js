const express = require('express');

const computePrimes = require('../utils/compute-primes');
const median = require('../utils/median');
const { errorTypes } = require('../middlewares/error-handlers');

const router = express.Router();

router.get('/api/median-prime', (req, res) => {
  // Parameter validation, make sure n was provided and it is a positive integer
  if (!req.query.n) {
    const err = new Error('Query parameter n was not provided.');
    err.type = errorTypes.missingParameter;
    throw err;
  } else if (!/^\d+$/.test(req.query.n)) {
    const err = new Error('Query parameter n must be a positive integer.');
    err.type = errorTypes.invalidParameterType;
    throw err;
  }

  const n = parseInt(req.query.n, 10);

  // Make sure n is greater than 2 as there are no primes less than 2
  // Make sure n is less than 100 million due to hardware limitations
  if (n < 3 || n >= 100000000) {
    const message =
      'Query parameter n must be ' +
      (n < 3 ? 'greater than 2.' : 'less than 100 million.');
    const err = new Error(message);
    err.type = errorTypes.invalidValue;
    throw err;
  }

  const primes = computePrimes(n);

  res.json(median(primes));
});

module.exports = router;
