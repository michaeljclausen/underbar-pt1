const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });
  
  it('returns undefined values if a single object not in an array is passed', () => {
    const person = {
      name: 'Joe',
      age: 42,
      job: 'clerk'
    };
    const result = _.pluck(person, 'age');
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('returns an undefined value in the array if the object does not contain the key being plucked', () => {
    const people = [
      { name: 'Greg', age: 20},
      { name: 'George'},
      { name: 'Svetlana', age: 53}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([20, undefined, 53]);
  });
});