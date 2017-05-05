const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  
    it('returns true if all values in an object are of type string', () => {
      const obj = {1: 'a', 2: 'b', 3: 'c'};
      expect(_.every(obj, val => typeof val === 'string')).toBe(true);
    });

    it('returns false if not all values of an object are of type number', () => {
      const obj = {1: 1, 2: '2', 3: 3};
      expect(_.every(obj, val => typeof val === 'number')).toBe(false);
    });
  });
});