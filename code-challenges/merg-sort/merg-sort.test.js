'use strict';

const mergeSort = require('./merg-sort.js');


describe('Test the selection sort function',()=>{

  it('can pass an arry',()=>{
    let arr = [8,4,23,42,16,15];

    expect(mergeSort(arr)).toBeDefined();
  });

  it('return sorted array',()=>{
    let arr = [8,4,23,42,16,15];

    expect(mergeSort(arr)).toEqual([4, 8 ,15 , 16 ,23 ,42]);
  });
});
