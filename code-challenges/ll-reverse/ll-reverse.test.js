'use strict';

const LinkedList = require('./ll-reverse.js');

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('reverse the linked-list', () => {

  test('singly linked-list ', () => {
    let li = new LinkedList();

    li.insert(1);
    li.insert(2);
    li.insert(3);
    li.insert(4);
    li.insert(5);
    expect(linkedList.reverse(li).toString()).toEqual(`{ 1 } --> { 2 } --> { 3 } --> { 4 } --> { 5 } --> NULL`);

  });

  test('if the list is Empty', () => {
    let li = new LinkedList();
    expect(linkedList.reverse(li)).toMatch('empty list');
  });


});
