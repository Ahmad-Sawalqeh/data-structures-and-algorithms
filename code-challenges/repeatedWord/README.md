# Challenge Summary
<!-- Short summary or background information -->
wirte function takes in a string and return the first repeated character within that string.

## Challenge Description
<!-- Description of the challenge -->
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
applying split method on the input string to convert it to an array holding each character aside, and looping over each element and compare the element with elements before, finaly return the first word repeated in that string.

for **Big O**: we looped over all string characters and in the same time also iterated over all perviuos elements so Big(O) will be **O(n^2)**.

## UML
<!-- Embedded whiteboard image -->
![](./assesst/repeatedWord.jpeg)