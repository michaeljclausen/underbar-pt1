const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('returns an empty array if no callback is passed', () => {
    const arr = ['1', 'a', 3];
    result = _.reject(arr);
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  it('filters out all of the elements equal to 1', () => {
    const arr = [0,1,0,0,2,1,0,1];
    result = _.reject(arr, num => num === 1);
    expect(result.length).toBe(5);
    expect(result).toEqual([0,0,0,2,0]);
  });
});