'use strict';

const LinkedList = require('./LinkedList.js');

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

  it('Can successfully add a node to the end of the linked list', () => {
    let node1 = 'string',node2 = 'number', node3 = 'array';
    list.insert(node1);
    list.insert(node2);
    list.insert(node3);
    expect(list.head.value).toEqual(node3);
  });

  it('Can successfully add multiple nodes into the linked listand at the end of a linked list', () => {
    let node1 = 'string',node2 = 'number', node3 = 'array';
    list.append(node1);
    list.append(node2);
    list.append(node3);
    expect(list.toString()).toEqual(`{ ${node1} } --> { ${node2} } --> { ${node3} } --> NULL`);
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    list.append(8);
    list.append(2);
    list.append(7);
    list.append(6);
    list.insertBefore(2,100);
    expect(list.head.next.value).toEqual(100);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    list.append(8);
    list.append(2);
    list.append(7);
    list.append(6);
    list.insertBefore(8,100);
    expect(list.head.value).toEqual(100);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    list.insert(67);
    list.insert(25);
    list.insert(6);
    list.insertAfter(25,100);
    expect(list.head.next.next.value).toEqual(100);
  });

});
