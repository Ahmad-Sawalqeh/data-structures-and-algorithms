'use strict';

const insertionSort = require('./insertion-sort.js');

describe('Testing Binary tree class', () => {

  it('testing an already sorted array', () => {

    expect(insertionSort([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);

  });

  it('testing unsorted array to return sorted', () => {

    expect(insertionSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);

  });

});
