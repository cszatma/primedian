const median = require('../median');

describe('median function tests', () => {
  it('should return 3 as the median', () => {
    expect(median([1, 2, 3, 4, 5])).toEqual([3]);
  });

  it('should return 4 and 6 as the medians', () => {
    expect(median([2, 4, 6, 8])).toEqual([4, 6]);
  });
});
