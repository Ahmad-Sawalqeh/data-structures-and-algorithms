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
