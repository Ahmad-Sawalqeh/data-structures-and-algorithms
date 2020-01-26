'use strict';

// let myArray = [4,8,15,23,42], num = 16;

function insertShiftArray([...arr], number){
  let rightIndex = 0;
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] > number) rightIndex = i;
  }
  arr.splice( rightIndex - 1, 0, number);
  return arr;
}

// console.log(insertShiftArray(myArray, num));

module.exports = insertShiftArray;
