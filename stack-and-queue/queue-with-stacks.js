'use strict';

class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(top = null){
    this.top = top;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(!this.top) return null;
    let node = this.top;
    this.top = node.next;
    return node.value;
  }

  peek(){
    return !this.top ? null : this.top.value;
  }

  isEmpty(){
    if(!this.top) return true;
    return false;
  }

}

class PseudoQueue {
  constructor(front = null, rear = null){
    this.front = front;
    this.rear = rear;
  }

  enqueue(value){
    let node = new Node(value);
    if(!this.front) this.front = node;
    this.rear = node;
  }

  dequeue(){
    if(!this.front) return null;
    let node = this.front;
    if(this.front !== this.rear){
      let currentNode = this.rear;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      this.front = currentNode;
      this.front.next = null;
    }else{
      this.front = null;
      this.rear = null;
    }
    return node.value;
  }

  peek(){
    return !this.front ? null : this.front.value;
  }

  isEmpty(){
    if(this.front === null && this.rear === null) return true;
  }
}

module.exports = { Node, Stack, PseudoQueue, };
