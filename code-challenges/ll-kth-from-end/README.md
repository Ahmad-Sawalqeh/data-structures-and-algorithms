# Challenge Summary
<!-- Short summary or background information -->
write function to return value of node, with given number counted from the end of the list.

## Challenge Description
<!-- Description of the challenge -->
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
itirating to know the length of the list of nodes,and another itirate to take the right value

## Solution
<!-- Embedded whiteboard -->
```
valueFromEnd(value){
    let length = 0;
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      length++;
    }
    currentNode = this.head;
    if(length === 0) return currentNode.value;
    let ourNode = length - value;
    while (currentNode.next) {
      currentNode = currentNode.next;
      counter++;
      if(counter === ourNode){
        return currentNode.value;
      }
    }
  }
```