'use strict';


const { Node, } = require('./tree.js');
const treeIntersection = require('./treeIntersection.js');


describe('treeIntersection()', () => {

  let first ;
  let second ;
  beforeEach(()=> {

    first = {head: null,};
    let one = new Node(1) ;
    let two = new Node(2) ;
    let three = new Node(3) ;
    let four = new Node(4) ;
    let five = new Node(5) ;
    first.head = one ;
    one.left = two ;
    one.right = three ;
    three.left = four ;
    three.right = five ;

    second = {head: null,};
    let a = new Node(1) ;
    let b = new Node(2) ;
    let c = new Node(3) ;
    second.head = a ;
    a.left = b;
    a.right = c;
  });

  it('Return Array of repeated values',()=>{
    expect(treeIntersection(first , first)).toEqual([1,2,3,4,5]);
  });

  it('works with deferent tree length',()=>{
    expect(treeIntersection(first , second)).toEqual([1,2,3]);
  });

  it('works with same tree length',()=>{
    expect(treeIntersection(second , second)).toEqual([1,2,3]);
  });

});
