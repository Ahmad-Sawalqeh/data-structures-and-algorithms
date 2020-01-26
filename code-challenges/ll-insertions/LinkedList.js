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

  insertAfter(value, newVal){
    const node = new Node(newVal, null);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      if (currentNode.next === null) {
        currentNode.next = node;
      }
      currentNode = currentNode.next;
    }
  }

}


module.exports = LinkedList;
