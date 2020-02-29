'use strict';

function quickSort(arr, left, right){
  if (left < right){
    let position = partition(arr, left, right);
    // console.log('left => ',left);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  // return arr;
}

function partition(arr, left, right){
  // console.log('arr => ',arr,' left => ',left,' right => ',right);
  let pivot = arr[right];
  let low = left - 1;
  // console.log('pivot => ',pivot,' low => ',low);
  for (let i = left; i < right; i++){
    if (arr[i] <= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  // console.log('arr => ',arr,' right => ',right,' low => ',low);
  swap(arr, right, low + 1);
  // console.log('arr => ',arr);
  return low + 1;
}

function swap(arr, i, low){
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

// let array = [8,4,23,42,16,15];
// console.log(quickSort([8,4,23,42,16,15],0,5));
// console.log(quickSort(array,0,5));
// quickSort(array,0,5);
// console.log(array);

module.exports = quickSort;
