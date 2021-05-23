'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(value) {
    if (!this.stackOne.top) {
      this.stackOne.push(value);
      return;
    }
    while (this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop().value);
    }
    this.stackOne.push(value);

    while (this.stackTwo.top) {
      this.stackOne.push(this.stackTwo.pop().value);
    }
  }

  dequeue() {
    if (!this.stackOne.top) throw new Error('PseudoQueue is empty');

    return this.stackOne.pop();
  }
}

module.exports = PseudoQueue;
