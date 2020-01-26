'use strict';

const insertShiftArray = require('./array-shift.js');

describe('validator module performs basic validation of', () => {

  it('It should add the number 5 in the right place in the array', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  });

  it('It should add the number 16 in the right place in the array', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });

  it('It should return the right length after adding number 16 to the array', () => {
    expect(insertShiftArray([2,4,6,8], 5).length).toStrictEqual(5);
    expect(insertShiftArray([4,8,15,23,42], 16).length).toStrictEqual(6);
  });

});