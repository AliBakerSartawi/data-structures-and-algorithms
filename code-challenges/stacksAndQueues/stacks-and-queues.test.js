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
});
