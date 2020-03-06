'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.result = [];
  }

  preOrder() {
    let _walk = (node) => {
      this.result.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return this.result;
  }

  inOrder() {
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      this.result.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return this.result;
  }

  postOrder() {
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      this.result.push(node.value);
    };
    _walk(this.root);
    return this.result;
  }

}

module.exports = { Node, BinaryTree, };
