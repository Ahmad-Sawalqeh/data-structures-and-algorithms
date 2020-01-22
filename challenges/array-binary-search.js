'use strict';

let sortedArray = [4,8,15,16,23,42], searchKey = 15;
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

// console.log(binarySearch(sortedArray, searchKey));



function binarySearch(arr, searchKey){
    L := 0
    R := n
    while L < R:
        m := floor((L + R) / 2)
        if A[m] > T:
            R := m
        else:
            L := m + 1
    return L - 1
}

console.log(binarySearch(sortedArray, searchKey));

module.exports = binarySearch;
