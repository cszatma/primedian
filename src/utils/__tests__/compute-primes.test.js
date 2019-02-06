const computePrimes = require('../compute-primes');

describe('computePrimes function tests', () => {
  it('should return the first 4 primes', () => {
    expect(computePrimes(10)).toEqual([2, 3, 5, 7]);
  });

  it('should return the first 7 primes', () => {
    expect(computePrimes(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });
});
