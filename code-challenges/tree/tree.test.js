'use strict';

const { BinaryTree, BinarySearchTree, } = require('./tree.js');

let tree, bst;

beforeEach(() => {
  tree = new BinaryTree();
  bst = new BinarySearchTree();
});

describe('Testing Binary tree class', () => {

  it('Can successfully instantiate an empty tree', () => {
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {

  });

  it('Can successfully add a left child and right child to a single root node', () => {

  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });

});
