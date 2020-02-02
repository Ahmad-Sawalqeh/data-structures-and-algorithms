'use strict';

const { Node, Stack, PseudoQueue, } = require('./stack-and-queue.js');

let pseudoQueue, queue;

beforeEach(()=>{
  pseudoQueue = new PseudoQueue();
});

describe(`Test the PseudoQueue()`, () => {

  describe(`Testing enqueue() method`, () => {

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

  });

  describe(`Testing dequeue() method`, () => {

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

  });

});
