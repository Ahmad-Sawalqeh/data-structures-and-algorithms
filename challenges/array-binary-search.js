'use strict';

// let sortdArray = [4,8,15,16,23,42], searchKey = 15;
// let sa = [11,22,33,44,55,66,77], skey = 90;

function binarySearch(arr, searchKey){
  let indexOfSearchKey = -1;
  for(let i = 0; i < arr.length ; i++){
    if(searchKey == arr[i]){
      indexOfSearchKey = i;
    }
  }
  return indexOfSearchKey;
}

// console.log(binarySearch(sa, skey));

module.exports = binarySearch;