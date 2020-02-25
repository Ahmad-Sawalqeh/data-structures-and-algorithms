'use strict';

let quickSort = require('./quickSort.js');

describe('testing quickSort',()=>{

  it('sorting an array',()=>{
    let array = [8,4,23,42,16,15];
    quickSort(array,0,5);
    expect(array).toEqual([4,8,15,16,23,42]);
  });

  it('it should sort the array , Reverse-sorted',()=>{
    let array = [20,18,12,8,5,-2];
    quickSort(array,0,5);
    expect(array).toEqual([-2,5,8,12,18,20]);
  });

  it('it should sort the array , Few uniques: ',()=>{
    let array = [5,12,7,5,5,7];
    quickSort(array,0,5);
    expect(array).toEqual([5,5,5,7,7,12]);
  });

  it('it should sort the array , Nearly-sorted:',()=>{
    let array = [2,3,5,7,13,11];
    quickSort(array,0,5);
    expect(array).toEqual([2,3,5,7,11,13]);
  });

});
