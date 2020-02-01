'use strict';

const { Stack, Queue, } = require('./stack-and-queue.js');

let stack, queue;

beforeEach(()=>{
  stack = new Stack();
  queue = new Queue();
});

describe(`Test the stack & queue`, () => {

  describe(`Testing stack`, () => {

    it('Can successfully push onto a stack', () => {
      stack.push('first value');
      expect(stack.top.value).toMatch('first value');
    });

    it('Can successfully push multiple values onto a stack', () => {
      stack.push(2);
      expect(stack.top.value).toEqual(2);
      stack.push(8);
      expect(stack.top.value).toEqual(8);
      stack.push(4);
      expect(stack.top.value).toEqual(4);
    });

    it('Can successfully pop off the stack', () => {
      stack.push(2);
      stack.push(8);
      stack.push(4);
      let pop = stack.pop();
      expect(stack.top.value).toEqual(8);
      expect(pop).toEqual(4);
    });

    it('Can successfully empty a stack after multiple pops', () => {
      stack.push(2);
      stack.push(8);
      stack.push(4);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBeTruthy();
    });

    it('Can successfully peek the next item on the stack', () => {
      stack.push(2);
      stack.push(8);
      stack.push(4);
      expect(stack.peek()).toEqual(4);
    });

    it('Can successfully instantiate an empty stack', () => {
      expect(stack.isEmpty()).toBeTruthy();
    });

    it('Can successfully test if it\'s not empty', () => {
      stack.push(2);
      stack.push(8);
      stack.push(4);
      expect(stack.isEmpty()).toBeFalsy();
    });

  });

  describe(`Testing queue`, () => {

    it('Can successfully enqueue into a queue', () => {
      queue.enqueue(2);
      expect(queue.front.value).toEqual(2);
      expect(queue.rear.value).toEqual(2);
      expect(queue.peek()).toEqual(2);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
      queue.enqueue(2);
      queue.enqueue(8);
      queue.enqueue(4);
      expect(queue.front.value).toEqual(2);
      expect(queue.rear.value).toEqual(4);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
      queue.enqueue(2);
      queue.enqueue(8);
      queue.enqueue(4);
      let dequeue = queue.dequeue();
      expect(queue.rear.value).toEqual(4);
      expect(dequeue).toEqual(2);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue(2);
      queue.enqueue(8);
      queue.enqueue(4);
      let front = queue.peek();
      expect(front).toEqual(2);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue(2);
      queue.enqueue(8);
      queue.enqueue(4);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
      expect(queue.rear).toBeNull();
      expect(queue.isEmpty()).toBeTruthy();
    });

    it('Can successfully instantiate an empty queue', () => {
      expect(queue.isEmpty()).toBeTruthy();
    });

  });

});
