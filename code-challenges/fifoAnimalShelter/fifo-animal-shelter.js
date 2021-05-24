'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class AnimalShelter {

  constructor() {
    this.dogShelter = new Queue();
    this.catShelter = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogShelter.enqueue(animal);
    }

    if (animal.type === 'cat') {
      this.catShelter.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogShelter.front; // or .peek()
    }

    if (pref === 'cat') {
      return this.catShelter.front; // or .peek()
    }

    //// stretch goal: if pref === undefined, return whichever
    //// animal has been waiting in the shelter the longest
    if (this.catShelter.size < this.dogShelter.size) {
      return this.dogShelter.front;
    }

    if (this.catShelter.size > this.dogShelter.size) {
      return this.catShelter.front;
    }

    if (this.catShelter.size === this.dogShelter.size) {
      return [this.dogShelter.front, this.catShelter.front];
    }
  }
}

module.exports = AnimalShelter;
