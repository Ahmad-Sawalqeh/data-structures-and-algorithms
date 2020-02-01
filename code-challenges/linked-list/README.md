# Challenge Summary
<!-- Short summary or background information -->
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

## Challenge Description
<!-- Description of the challenge -->
Create a Node class to create nodes and LinkedList class with some some methods `insert`, `includes` and `toString`, help to add new node to list and check for existance of some node within list also method for return all values of nodes list.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I start create Node, LinkedList classes. and initiate methods `insert` to create head node or adding new head. `includes` to search for specific value within the list, `toString` to return all nodes values of the list as a string same as this `{ 5 } --> { 9 } --> { 6 } --> { 8 } --> NULL`

## Solution
<!-- Embedded whiteboard image -->
```
'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString(){
    let nodeList = [], currentNode = this.head;
    while (currentNode) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodeList.map(val => `{ ${val} }`).join(' --> ').concat(` --> NULL`);
  }

}

module.exports = { LinkedList, };
```