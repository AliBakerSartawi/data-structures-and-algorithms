'use strict';

class Stack {
  constructor() {
    this.storage = {};
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new StackNode(value, this.top || null);
    this.size++;
    this.storage[this.size] = newNode;
    this.top = this.storage[this.size];
  }

  pop() {
    if (this.isEmpty()) throw new Error('Cannot pop() from empty stack');
    let popped = this.top;
    delete this.storage[this.size]; // deleting the top from storage
    this.size--;
    this.top = this.storage[this.size];
    return popped;
  }

  peek() {
    if (this.isEmpty()) throw new Error('Cannot peek() empty stack');
    return this.top;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

class StackNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// -------------------------------

class Queue {

}

class QueueNode {
  
}

// -------------------------------

module.exports = {
  Stack,
  Queue
};
