# Challenge Summary
<!-- Short summary or background information -->
function return the index of given value from a sorted array.

## Challenge Description
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I start to use for-loop statment to itirate over a sorted array and assign the index of the correct answer.

## Solution
<!-- Embedded whiteboard image -->
```
function binarySearch(arr, searchKey){
  let indexOfSearchKey = -1;
  for(let i = 0; i < arr.length ; i++){
    if(searchKey == arr[i]){
      indexOfSearchKey = i;
    }
  }
  return indexOfSearchKey;
}
```
