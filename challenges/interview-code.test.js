'use strict';

const { sumEachRowInMatrix, fibonacciSequence, } = require('./interview-code.js');


describe('testing sum of each row in a matrix array', () => {

  it('should return [6, 15, 18], which is sum of inner arrays', () => {
    expect(sumEachRowInMatrix([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual([6, 15, 18]);
  });

  it('It should return length of the result array which is equal 4', () => {
    expect(sumEachRowInMatrix([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11], [3, -2, 11] ]).length).toStrictEqual(4);
  });

  it('It should return [ 3, 25 ] as a result', () => {
    expect(sumEachRowInMatrix([ [-2, 5], [3, 22] ])).toStrictEqual([ 3, 25 ]);
  });

});


describe('testing to get the right fibonacci Sequence of an integer', () => {

  it('should the result be 21, when we pass number 8 as input', () => {
    expect(fibonacciSequence(8)).toEqual(21);
  });

  it('if we pass 0 should the retrun value be 0 also', () => {
    expect(fibonacciSequence(0)).toEqual(0);
  });

  it('if we pass -1 should the retrun value be 1 also', () => {
    expect(fibonacciSequence(-1)).toEqual(1);
  });

  it('if we pass 1 should the retrun value be 1 also', () => {
    expect(fibonacciSequence(1)).toEqual(1);
  });

});
