module.exports = exports = n => {
  /*
    Due to the nature of this problem we are able to use a Uint8Array to
    get performance and space benefits.
    This is due to the fact that regular JS arrays must perform a lot of extra
    work to determine the type of the array elements. JS arrays also are not guaranteed
    to be stored in a continuous buffer like they are in C or other languages.
    Typed Arrays on the other hand do store their data in a continuous buffer.
    They also do not perform all the extra type checking work. Our array is not
    intended to grow or shrink therefore, we do not need all the extra functionality
    JS arrays offer.
    Also a Uint8Array makes sense since we only need to store boolean values.
    We only need a single byte to represent this however, in JS booleans are not
    guaranteed to be one byte (some sources say they are 4 bytes) due to various things
    JS does under the hood. By using a Uint8Array we guarantee each element is exactly
    one byte which saves space.

    tldr; Uint8Array is both faster and uses less space in this application than a regular Array
   */
  // Create an array of size n filled with the value 0
  // 0 will be treated as being prime and 1 will be composite (not prime)
  const boolArray = new Uint8Array(n);
  // Eliminate all multiples of primes
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (boolArray[i] === 0) {
      for (let j = i * i; j < n; j += i) {
        boolArray[j] = 1;
      }
    }
  }

  // Convert the boolArray into a regular JS array of numbers containing all the primes
  return boolArray.reduce((primes, element, index) => {
    if (element === 0 && index > 1) {
      primes.push(index);
    }

    return primes;
  }, []);
};

exports.unoptimized = n => {
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

  return boolArray.reduce((primes, element, index) => {
    if (element && index > 1) {
      primes.push(index);
    }

    return primes;
  }, []);
};
