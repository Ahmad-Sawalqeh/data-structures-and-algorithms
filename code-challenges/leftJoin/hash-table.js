'use strict';

let list;

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(data){
    let node = new Node(data);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }

  read(){
    if(!this.head){
      return 'Invalid!';
    }else{
      let current = this.head;
      while(current){
        list.push(current.data);
        current = current.next;
      }
    }
    return list;
  }

}

class Hashmap{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce((acc,val) => {
      return acc + val.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  set(key, value){
    let hashedKey = this.hash(key);
    if(!this.map[hashedKey]){
      let ll = new LinkedList();
      ll.add([key,value]);
      this.map[hashedKey] = ll;
    }else{
      this.map[hashedKey].add([key,value]);
    }
    return this.map;
  }

  get(key){
    let hashKey = this.hash(key);
    let current = this.map[hashKey].head;
    if(!this.map[hashKey]) return `No value for ${key}!`;
    while(current){
      if(current.data[0] === key){
        return current.data[1];
      }
      current = current.next;
    }
  }

  contains(key){
    let hashKey = this.hash(key);
    if(!this.map[hashKey]) return false;
    let current = this.map[hashKey].head;
    while(current){
      if(current.data[0] === key){
        return true;
      }
      current = current.next;
    }
    return false;
  }

}

module.exports = { Node, LinkedList, Hashmap, };
