# Challenge Summary
<!-- Short summary or background information -->
wirte function taks in a two hashed maps tables and return a set of values found in both tables.

## Challenge Description
<!-- Description of the challenge -->
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of `NULL` should be appended to the result row.
* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
* Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I built  `leftJoin()` function that take two tables and store first table keys in an array and then loop over, to check if the other table have the same keys or not, and return the similler keys values pairs.

for **Big O**: I saved the keys in an array and loop once to check only for the repeated keys, then add its values, thats gives us **O(n)**, where is **n** is the length of array.

## UML
<!-- Embedded whiteboard image -->
![](./assesst/leftJoin.jpeg)
