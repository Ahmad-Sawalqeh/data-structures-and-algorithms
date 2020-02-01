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
    // this.counter = 0;
  }

  append(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insert(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      return this.head;
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

  toString() {
    if(!this.head) return 'empty list';
    let nodeList = [], currentNode = this.head;
    while (currentNode) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodeList.map(val => `{ ${val} }`).join(' --> ').concat(` --> NULL`);
  }

  insertBefore(value, newVal) {
    const node = new Node(newVal, null);
    let currentNode = this.head, previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = node;
        } else {
          previousNode.next = node;
        }
        node.next = currentNode;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal) {
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

  valueFromEnd(value) {
    let length = 0;
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      length++;
    }
    currentNode = this.head;
    if (length === 0) return currentNode.value;
    let ourNode = length - value;
    while (currentNode.next) {
      currentNode = currentNode.next;
      counter++;
      if (counter === ourNode) {
        return currentNode.value;
      }
    }
  }

  mergeLists(li1, li2) {
    let currentNode1 = li1.head;
    let currentNode2 = li2.head;

    while (currentNode1 || currentNode2) {
      if (currentNode1) {
        this.append(currentNode1.value);
        currentNode1 = currentNode1.next;
      }

      if (currentNode2) {
        this.append(currentNode2.value);
        currentNode2 = currentNode2.next;
      }
    }
    return this;
  }

  reverse(li) {
    if(!li.head) return 'empty list';
    let currentNode = li.head;
    let newList = new LinkedList();
    while (currentNode) {
      newList.insert(currentNode.value);
      currentNode = currentNode.next;
    }
    return newList;
  }

}


module.exports = LinkedList;
