'use strict';

// const { Node, BinaryTree, } = require('./tree.js');

function treeIntersection(tree1, tree2){
  let result = [];
  let tree1Values = [];
  // let tree1Values = tree1.preOrder();

  let current1 = tree1.head ;
  let current2 = tree2.head ;

  let _walk = (node) => {
    tree1Values.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(current1);

  let _walk2 = (node) => {
    if(tree1Values.includes(node.value))result.push(node.value);
    if(node.left) _walk2(node.left);
    if(node.right) _walk2(node.right);
  };
  _walk2(current2);

  return result ;
}

module.exports = treeIntersection;
