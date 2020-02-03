'use strict';

const LinkedList = require('./ll-merge.js');

let mergedLinkedList, list1, list2;

beforeEach(() => {

  mergedLinkedList = new LinkedList();
  list1 = new LinkedList();
  list2 = new LinkedList();

  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);

  list2.append(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);

  mergedLinkedList.mergeLists(list1, list2);


});

describe('Linked List Module', () => {

  it('Can successfully instantiate an empty linked list', () => {
    expect(mergedLinkedList.toString()).toEqual(`{ 1 } --> { 1 } --> { 2 } --> { 2 } --> { 3 } --> { 3 } --> { 4 } --> { 4 } --> NULL`);
  });

});
