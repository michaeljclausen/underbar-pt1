const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('multiplies the accumulator by the element if the element is greater than 2', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => num > 2 ? acc * num : acc);
    expect(result).toEqual(60);
  });
});