module.exports = n => {
  // Create an array of size n filled with the value `true`
  const boolArray = Array(n).fill(true);

  // Eliminate all multiples of primes
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (boolArray[i]) {
      for (let j = i * i; j < n; j += i) {
        boolArray[j] = false;
      }
    }
  }

  // Convert the bool array into an array of ints
  return boolArray
    .map((isPrime, index) => (isPrime ? index : undefined))
    .filter(num => !!num && num > 1);
};
