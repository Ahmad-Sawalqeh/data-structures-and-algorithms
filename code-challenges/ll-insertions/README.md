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
using Object Oriented programming and for the `append` method the Big O(1) whereas `insertBefore` method Big O(n) also for the `insertAfter` method the Big O(n)


## UML
![](./assets/insert-after-and-before.jpeg)

## Solution
<!-- Embedded whiteboard -->
```
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
```