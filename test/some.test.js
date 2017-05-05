const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any value in an object === \'a\'', () => {
    const obj = {1: 1, 2: 'a', 3: undefined, 4: null};
    expect(_.some(obj, val => val === 'a')).toBe(true);
  });

  it('returns false if no value in an object is null', () => {
    const obj = {1: 1, 2: 'a', 3: undefined, 4: 'peanut butter'};
    expect(_.some(obj, val => val === null)).toBe(false);
  });

});