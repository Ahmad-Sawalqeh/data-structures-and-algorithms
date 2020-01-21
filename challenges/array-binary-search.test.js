    
'use strict';

const binarySearch = require('./array-binary-search.js');

describe('validator module performs basic validation of', () => {

  it('should return 3, index of the 8 value from the array', () => {
    expect(binarySearch([2,4,6,8], 8)).toEqual(3);
  });

  it('It should return the index of the right place of value 8 from the array which is equal 1', () => {
    expect(binarySearch([4,8,15,23,42], 8)).toEqual(1);
  });

  it('It should return -1 if the value not in the array', () => {
    expect(binarySearch([2,4,6,8], 12)).toEqual(-1);
  });

});