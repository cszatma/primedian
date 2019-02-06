const Benchmark = require('benchmark');

const computePrimes = require('../compute-primes');

const suite = new Benchmark.Suite();

suite
  .add('Unoptimized test', () => {
    computePrimes.unoptimized(1000000);
  })
  .add('Optimized test', () => {
    computePrimes(1000000);
  })
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    const unoptimized = this[0];
    console.log('Unoptimized:');
    console.log(`mean: ${unoptimized.stats.mean}`);
    console.log(`sd: ${unoptimized.stats.deviation}`);
    console.log(`variance: ${unoptimized.stats.variance}`);
    const optimized = this[1];
    console.log('Optimized:');
    console.log(`mean: ${optimized.stats.mean}`);
    console.log(`sd: ${optimized.stats.deviation}`);
    console.log(`variance: ${optimized.stats.variance}`);
  })
  .run();
