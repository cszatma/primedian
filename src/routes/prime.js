const express = require('express');

const computePrimes = require('../utils/compute-primes');
const median = require('../utils/median');

const router = express.Router();

router.get('/api/median-prime', (req, res) => {
  const n = parseInt(req.query.n, 10);
  const primes = computePrimes(n);

  res.json(median(primes));
});

module.exports = router;
