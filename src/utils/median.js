module.exports = array => {
  if (!Array.isArray(array) || !ArrayBuffer.isView(array)) {
    throw new TypeError('Argument must be an array.');
  }

  const middle = array.length / 2;

  if (array.length % 2 === 0) {
    // Even number of elements
    return [array[middle - 1], array[middle]];
  } else {
    return [array[Math.floor(middle)]];
  }
};
