'use strict';

function mergeSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    // console.log('mid',mid);
    let left = arr.slice(0,mid);
    // console.log('left',left);
    let right = arr.slice(mid,arr.length);
    // console.log('right',right);
    mergeSort(left);
    mergeSort(right);
    // console.log('reach merge');
    return merge(left,right,arr);
  }

}

function merge(left,right,arr){
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    }else{
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  // console.log('arr sort one => ',arr);
  if(i === left.length){
    arr[k] = right[j];
  }else{
    arr[k] = left[i];
  }
  // console.log('arr sort second => ',arr);
  return arr;
}

// console.log(mergeSort([8,4,23,42,16,15]));

module.exports = mergeSort;
