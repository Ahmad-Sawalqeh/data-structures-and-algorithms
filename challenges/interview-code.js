'use strict';

function sumEachRowInMatrix(arr) {
  let newArray = [], sumEachRow = 0;
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length ; j++){
      sumEachRow += arr[i][j];
    }
    newArray.push(sumEachRow);
    sumEachRow = 0;
  }
  return newArray;
}

function fibonacciSequence(num){
  let number = num, initielArray = [0, 1];
  if (num === 0){
    return 0;
  }else if (num === 1){
    return initielArray;
  }else{
    for(let i = 2 ; i <= number ; i++){
      initielArray.push(initielArray[i-2] + initielArray[i-1]);
    }
    return initielArray[initielArray.length - 1];
  }
}

module.exports = { sumEachRowInMatrix, fibonacciSequence };
