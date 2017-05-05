const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of values in an object', () => {
    const obj = {1:1, 2:1, 3:3};
    expect(_.uniq(obj)).toEqual([1,3]);
  });
});