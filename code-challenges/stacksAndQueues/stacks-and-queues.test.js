'use strict';

const Stack = require('./stacks-and-queues').Stack;
const Queue = require('./stacks-and-queues').Queue;

describe(':::::Stack:::::', () => {
  it('#constructor creates empty stack', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
    expect(stack.top).toBeNull();
    expect(stack.size).toEqual(0);
  });

  it('#push() adds properly --> top & next are set properly', () => {
    let stack = new Stack();
    stack.push(10);
    expect(stack.size).toEqual(1);
    expect(stack.storage[1].value).toEqual(10);
    expect(stack.storage[1].next).toEqual(null);
    expect(stack.top.value).toEqual(10);

    stack.push(20);
    expect(stack.size).toEqual(2);
    expect(stack.storage[2].value).toEqual(20);
    expect(stack.storage[2].next.value).toEqual(10);
    expect(stack.top.value).toEqual(20);

    stack.push(30);
    expect(stack.size).toEqual(3);
    expect(stack.storage[3].value).toEqual(30);
    expect(stack.storage[3].next.value).toEqual(20);
    expect(stack.storage[3].next.next.value).toEqual(10);
    expect(stack.top.value).toEqual(30);
  });

  it('#pop() throws error if stack is empty', () => {
    let stack = new Stack();
    expect(() => stack.pop()).toThrow('Cannot pop() from empty stack'); // should be wrapped with () => for error testing to run properly
  });

  it('#pop() removes properly --> top is set properly', () => {
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.size).toEqual(3);
    expect(stack.storage[stack.size].value).toEqual(30);

    let popped = stack.pop();
    expect(popped.value).toEqual(30);

    expect(stack.size).toEqual(2);
    expect(stack.top.value).toEqual(20);
    expect(stack.storage[stack.size].value).toEqual(20);
  });

  it('#peek() throws error if stack is empty', () => {
    let stack = new Stack();
    expect(() => stack.peek()).toThrow('Cannot peek() empty stack'); // should be wrapped with () => for error testing to run properly
  });

  it('#peek() returns the node object at the top', () => {
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.peek().value).toEqual(30);
    expect(stack.peek().next.value).toEqual(20);

    stack.pop();

    expect(stack.peek().value).toEqual(20);
    expect(stack.peek().next.value).toEqual(10);
  });

  it('#isEmpty() returns true if stack is empty', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('#isEmpty() returns false if stack is not empty', () => {
    let stack = new Stack();
    stack.push(10);
    expect(stack.isEmpty()).toEqual(false);
  });

  it('#push() and pop() until empty --> top will be null, not undefined --> can push again', () => {
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.size).toEqual(0);
    expect(stack.top).toEqual(null);

    stack.push(10);
    expect(stack.size).toEqual(1);
    expect(stack.storage[1].value).toEqual(10);
    expect(stack.storage[1].next).toEqual(null);
    expect(stack.top.value).toEqual(10);

    stack.push(20);
    expect(stack.size).toEqual(2);
    expect(stack.storage[2].value).toEqual(20);
    expect(stack.storage[2].next.value).toEqual(10);
    expect(stack.top.value).toEqual(20);
  });
});

describe(':::::Queue:::::', () => {
  it('#constructor creates empty Queue', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
    expect(queue.size).toEqual(0);
  });

  it('#enqueue() adds to the queue --> next & front & rear are set properly', () => {
    let q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.size).toEqual(3);
    expect(q.front.value).toEqual(10);
    expect(q.front.next.value).toEqual(20);
    expect(q.front.next.next.value).toEqual(30);
    expect(q.rear.value).toEqual(30);
  });

  it('#dequeue() throws error if queue is empty', () => {
    let q = new Queue();
    expect(() => q.dequeue()).toThrow('Cannot dequeue() empty queue');
  });

  it('#dequeue() removes from the front of the queue --> front is set properly', () => {
    let q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.front.value).toEqual(10);

    q.dequeue();
    expect(q.front.value).toEqual(20);

    q.dequeue();
    expect(q.front.value).toEqual(30);
    expect(q.rear.value).toEqual(30);
  });

  it('#peek() throws error if queue is empty', () => {
    let q = new Queue();
    expect(() => q.peek()).toThrow('Cannot peek() empty queue');
  });

  it('#peek() returns the node in the front', () => {
    let q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.peek().value).toEqual(10);
    q.dequeue();
    expect(q.peek().value).toEqual(20);
    q.dequeue();
    expect(q.peek().value).toEqual(30);
  });

  it('#isEmpty() return true if queue is empty', () => {
    let q = new Queue();
    expect(q.isEmpty()).toEqual(true);
  });

  it('#isEmpty() return false if queue is not empty', () => {
    let q = new Queue();
    q.enqueue(10);
    expect(q.isEmpty()).toEqual(false);
  });

  it('#enqueue() & dequeue() until queue is empty --> front will be null, not undefined --> can enqueue again', () => {
    let q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).toEqual(true);
    expect(q.size).toEqual(0);
    expect(q.front).toEqual(null);

    let num = 0;
    console.log(++num);
    q.enqueue(10);
    console.log(++num);
    console.log(q);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.size).toEqual(3);
    expect(q.front.value).toEqual(10);
    expect(q.front.next.value).toEqual(20);
    expect(q.front.next.next.value).toEqual(30);
    expect(q.rear.value).toEqual(30);
  });
});
