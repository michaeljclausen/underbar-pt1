const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });
  it('returns undefined if passed an empty array', () => {
    expect(_.first([], 1)).toBe(undefined);
  });
  it('returns an empty array if you ask for zero elements', () =>{
    expect(_.first(['a','b','c'], 0)).toEqual([ ]);
  }); 
});