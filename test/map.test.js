_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('returns an array of identical elements if no callback is provided', () => {
    const arr = [1,2,3];
    const mappedArr = _.map(arr);
    expect(mappedArr).toEqual(arr);
  });
  
  it('returns an array of values when provided an array-like object', () => {
    const obj = {1: 'a', 2: 'b', 3: 'c'};
    const mappedObj = _.map(obj);
    expect(Array.isArray(mappedObj)).toBe(true);
    expect(mappedObj).toEqual(['a','b','c']);
  });

  it('adds 1 to every element in an object -- string or number', () => {
    const obj = {
      name: 'steve',
      number: 32,
      job: 'banker'
    }
    const mappedObj = _.map(obj, el => el + 1);
    expect(mappedObj).toEqual(['steve1', 33, 'banker1']);
  });
});