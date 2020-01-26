# Challenge Summary
<!-- Short summary or background information -->
create LinkedList class and Write `append`, `insertBefore` and `insertAfter` methods.

## Challenge Description
<!-- Description of the challenge -->
create LinkedList class and Write these methods:
1. `.append(value)` which adds a new node with the given value to the end of the list
1. `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node
1. `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
using Object Oriented programming
## Solution
<!-- Embedded whiteboard -->
```
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

  append(value) {
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

  insert(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    this.head = node;
    node.next = currentNode;
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

  insertBefore(value, newVal){
    const node = new Node(newVal, null);
    let currentNode = this.head, previousNode = currentNode;
    while (currentNode) {
      if(currentNode.value === value){
        node.next = currentNode;
        // currentNode = node;
        previousNode.next = node;
        break;
      }else{
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal){
    const node = new Node(newVal, null);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
  }

}
```