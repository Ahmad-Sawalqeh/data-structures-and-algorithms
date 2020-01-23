'use strict';

// let sortedArray = [4,8,15,16,23,42], searchKey = 16;
// let sa = [11,22,33,44,55,66,77], skey = 90;

// function binarySearch(arr, searchKey){
//   let indexOfSearchKey = -1;
//   for(let i = 0; i < arr.length ; i++){
//     if(searchKey == arr[i]){
//       indexOfSearchKey = i;
//     }
//   }
//   return indexOfSearchKey;
// }

function binarySearch(arr, searchKey){
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    if (searchKey === arr[Math.floor((start + end) / 2)]) {
      return Math.floor((start + end) / 2);
    }
    if (searchKey > arr[Math.floor((start + end) / 2)]) {
      start = Math.floor((start + end) / 2) + 1;
    }
    if (searchKey < arr[Math.floor((start + end) / 2)]) {
      end = Math.floor((start + end) / 2) - 1;
    }
  }
  return -1;
}

// console.log(binarySearch(sortedArray, searchKey));

module.exports = binarySearch;
