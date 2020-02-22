/* eslint-disable strict */
'user strict';

const { Node, BinaryTree,} = require('./Breadth-first.js');

describe('Binary Tree', () => {

  it('using Breadth-first approach to return a list of the values in the order they were encountered', () => {

    let one = new Node(2);
    let two = new Node(7);
    let three = new Node(5);
    let four = new Node(2);
    let five = new Node(6);
    let six = new Node(9);
    let seven = new Node(5);
    let eight = new Node(11);
    let nine = new Node(4);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.left = nine;

    let tree = null;
    tree = new BinaryTree(one);

    expect(tree.breadthFirst(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);

  });

});
