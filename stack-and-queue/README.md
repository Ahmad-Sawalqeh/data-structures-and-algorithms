# Stacks and Queues
<!-- Short summary or background information -->
create 3 classes Node, Stack and Queue and add for Stack class `push, pop, peek, isEmpty` methods, also add for Queue class `enqueue, dequeue, peek, isEmpty` methods.

## Challenge
<!-- Description of the challenge -->
Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.

Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.
Define a method:<br>
1. `push` which takes any value as an argument and adds a new node with that value to the top of the stack 
1. `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
1. `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
1. `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the stack is empty.

Create a `Queue` class that has a `front, rear` property. It creates an empty Queue when instantiated.
Define a method:<br>
1. `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue.
1. `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value
1. `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
1. `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I started to apply the stack & queue accpect on node linked list by writing calss with constructor function and all requested methods and Big O of both Stack & Queue is O(n).

## API
<!-- Description of each method publicly available to your Stack and Queue-->
![](./assert/stack-and-queue.jpeg)