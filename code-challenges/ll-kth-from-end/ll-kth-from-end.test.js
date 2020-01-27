'use strict';

const LinkedList = require('./ll-kth-from-end.js');

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe('Linked List Module', () => {

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    list.insert(79);
    list.insert(28);
    list.insert(61);
    list.insert(90);
    list.insert(32);
    list.insert(14);
    list.insert(98);
    expect(list.valueFromEnd(3)).toEqual(90);
  });

  it('Where k and the length of the list are the same', () => {
    list.append(79);
    list.append(28);
    list.append(61);
    list.append(90);
    list.append(32);
    list.append(14);
    list.append(98);
    expect(list.valueFromEnd(0)).toEqual(98);
  });

  it('Where the linked list is of a size 1', () => {
    list.append(79);
    expect(list.valueFromEnd(0)).toEqual(79);
  });

  it('Where k is not a positive integer', () => {
    list.insert(79);
    list.insert(28);
    list.insert(61);
    list.insert(90);
    list.insert(32);
    list.insert(14);
    list.insert(98);
    expect(list.valueFromEnd(-5)).toBeFalsy();
  });

});