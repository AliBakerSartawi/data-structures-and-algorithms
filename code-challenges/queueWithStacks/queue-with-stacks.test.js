'use strict';

const PseudoQueue = require('./queue-with-stacks');

describe(':::::PseudoQueue:::::', () => {
  it('#constructor creates empty PseudoQueue', () => {
    let q = new PseudoQueue();
    expect(q instanceof PseudoQueue).toBeTruthy();
    expect(q.stackOne.top).toEqual(null);
  });

  it('#enqueue() adds to the queue', () => {
    let q = new PseudoQueue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.stackOne.top.value).toEqual(10);
  });

  it('#dequeue() throws error if queue is empty', () => {
    let q = new PseudoQueue();
    expect(() => q.dequeue()).toThrow('PseudoQueue is empty');
  });

  it('#dequeue() removes from the front of the queue', () => {
    let q = new PseudoQueue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    expect(q.dequeue().value).toEqual(10);
    expect(q.dequeue().value).toEqual(20);
    expect(q.dequeue().value).toEqual(30);
    expect(q.stackOne.top).toEqual(null);
  });

  it('#enqueue() & dequeue() until queue is empty --> front will be null, not undefined --> can enqueue again', () => {
    let q = new PseudoQueue();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.stackOne.top).toEqual(null);

    q.enqueue(10);
    expect(q.stackOne.top.value).toEqual(10);
    q.enqueue(20);
    expect(q.stackOne.top.value).toEqual(10);
    q.enqueue(30);
    expect(q.stackOne.top.value).toEqual(10);
  });
});
