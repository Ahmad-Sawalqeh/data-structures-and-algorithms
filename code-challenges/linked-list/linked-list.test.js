'use strict';

const { LinkedList, } = require('./linked-list.js');

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe('Linked List Module', () => {

  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let firstVal = 'string';
    list.insert(firstVal);
    expect(list.head.value).toEqual(firstVal);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let firstVal = 'string';
    let nextVal = 54;
    list.insert(firstVal);
    list.insert(nextVal);
    expect(list.head.value).toEqual(firstVal);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let firstVal = 'string';
    let nextVal = 54;
    list.insert(firstVal);
    list.insert(nextVal);
    expect(list.head.next.value).toEqual(nextVal);
  });

  it('Will return true when finding a value within the linked list that exists!', () => {
    list.insert(67);
    list.insert(25);
    list.insert(6);
    list.insert(23);
    expect(list.includes(25)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert(67);
    list.insert(25);
    list.insert(6);
    list.insert(23);
    expect(list.includes(100)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const node1 = 67, node2 = 92, node3 = 97, node4 = 55;
    list.insert(node1);
    list.insert(node2);
    list.insert(node3);
    list.insert(node4);
    expect(list.toString()).toEqual(`{ ${node1} } --> { ${node2} } --> { ${node3} } --> { ${node4} } --> NULL`);
  });

});
