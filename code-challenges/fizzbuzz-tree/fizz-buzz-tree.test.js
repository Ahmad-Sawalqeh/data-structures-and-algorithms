'use strict';

const { Node, fizzBuzzTree, } = require('./fizz-buzz-tree.js');

let tree, originalTree = null ;
beforeEach(()=> {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(30) ;
  one.left = two ;
  one.right = three ;
  three.left = four;
  three.right = five;
  two.right = six;
  originalTree = one ;
  tree = fizzBuzzTree(originalTree);
});

describe('testing Fizz-Buzz Tree', ()=> {

  it('write Fizz When value is divisible by 3', () => {

    expect(tree.right.value).toEqual('Fizz');

  });

  it('write Buzz When value is divisible by 5', () => {

    expect(tree.right.right.value).toEqual('Buzz');

  });

  it('write FizzBuzz When value is divisible by 3 and 5', () => {

    expect(tree.left.right.value).toEqual('FizzBuzz');

  });

  it('change the value to string if it\'s not divisible by 3 or 5', () => {

    expect(typeof tree.value).toEqual('string');

  });

});
