# Challenge Summary
<!-- Short summary or background information -->
function helps to add new number into array with right place.

## Challenge Description
<!-- Description of the challenge -->
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I start to use for-loop statment to itirate over an array and pick the right place index accourding the number that we want to add.

## Solution
<!-- Embedded whiteboard image -->
```
function insertShiftArray([...arr], number){
  let rightIndex = 0;
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] > number) rightIndex = i;
  }
  arr.splice( rightIndex - 1, 0, number);
  return arr;
}
```
