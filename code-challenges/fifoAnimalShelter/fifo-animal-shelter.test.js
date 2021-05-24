'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

const animal1 = {
  type: 'cat',
  name: 'silly',
  age: 1
};

const animal2 = {
  type: 'cat',
  name: 'pasta',
  age: 5
};

const animal3 = {
  type: 'cat',
  name: 'dumb-dumb',
  age: 4
};

const animal4 = {
  type: 'cat',
  name: 'lava',
  age: 2
};

const animal5 = {
  type: 'dog',
  name: 'wolverine',
  age: 3
};

const animal6 = {
  type: 'dog',
  name: 'escanor',
  age: 1
};

const animal7 = {
  type: 'dog',
  name: 'estarossa',
  age: 2
};

const animal8 = {
  type: 'panda',
  name: 'estarossa',
  age: 2
};

describe('AnimalShelter FIFO structure', () => {

  test('#constructor creates empty queues at instantiation', () => {
    const q = new AnimalShelter();
    // console.log(q);
    expect(q.dogShelter.front).toEqual(null);
    expect(q.catShelter.front).toEqual(null);
  });

  test('#enqueue() without specifying animal type (or wrong animal type) raises exception', () => {
    const q = new AnimalShelter();

    // enqueued animal type was 'panda'
    expect(() => q.enqueue(animal8)).toThrow('Animal type was not specified!');
  });

  test('#enqueue() adds cat type to its proper queue', () => {
    const q = new AnimalShelter();
    q.enqueue(animal2);

    // enqueued animal was 'cat', dog queue should be empty
    expect(q.dogShelter.front).toEqual(null);

    expect(q.catShelter.front.value.type).toEqual('cat');
    expect(q.catShelter.front.value.name).toEqual('pasta');
  });

  test('#enqueue() adds dog type to its proper queue', () => {
    const q = new AnimalShelter();
    q.enqueue(animal5);

    // enqueued animal was 'dog', cat queue should be empty
    expect(q.catShelter.front).toEqual(null);

    expect(q.dogShelter.front.value.type).toEqual('dog');
    expect(q.dogShelter.front.value.name).toEqual('wolverine');
  });

  test('#enqueue() adds multiple dog and cat types to their proper queue', () => {
    const q = new AnimalShelter();

    // cats
    q.enqueue(animal1);
    q.enqueue(animal2);
    q.enqueue(animal3);
    q.enqueue(animal4);

    // dogs
    q.enqueue(animal5);
    q.enqueue(animal6);
    q.enqueue(animal7);

    // front of cat queue is correct after multiple enqueues
    expect(q.catShelter.front.value.type).toEqual('cat');
    expect(q.catShelter.front.value.name).toEqual('silly');

    expect(q.catShelter.front.next.value.type).toEqual('cat');
    expect(q.catShelter.front.next.value.name).toEqual('pasta');

    expect(q.catShelter.front.next.next.value.type).toEqual('cat');
    expect(q.catShelter.front.next.next.value.name).toEqual('dumb-dumb');

    // front of cat queue is correct after multiple enqueues
    expect(q.dogShelter.front.value.type).toEqual('dog');
    expect(q.dogShelter.front.value.name).toEqual('wolverine');

    expect(q.dogShelter.front.next.value.type).toEqual('dog');
    expect(q.dogShelter.front.next.value.name).toEqual('escanor');

    expect(q.dogShelter.front.next.next.value.type).toEqual('dog');
    expect(q.dogShelter.front.next.next.value.name).toEqual('estarossa');
  });

  test('#dequeue() works properly with pref parameter', () => {
    const q = new AnimalShelter();

    // cats
    q.enqueue(animal1);
    q.enqueue(animal2);
    q.enqueue(animal3);
    q.enqueue(animal4);

    // dogs
    q.enqueue(animal5);
    q.enqueue(animal6);
    q.enqueue(animal7);

    // dequeue('cat') should remove and return the front node of cat queue
    const dequeuedCat = q.dequeue('cat');
    expect(dequeuedCat.value.type).toEqual('cat');
    expect(dequeuedCat.value.name).toEqual('silly');
    // front should be updated to the next node
    expect(q.catShelter.front.value.name).toEqual('pasta');

    // dequeue('dog') should remove and return the front node of dog queue
    const dequeuedDog = q.dequeue('dog');
    expect(dequeuedDog.value.type).toEqual('dog');
    expect(dequeuedDog.value.name).toEqual('wolverine');
    // front should be updated to the next node
    expect(q.dogShelter.front.value.name).toEqual('escanor');
  });

  test('---STRETCH--- #dequeue() returns longest waiting animal if pref is undefined', () => {
    const q = new AnimalShelter();

    // cats
    q.enqueue(animal1);
    q.enqueue(animal2);
    q.enqueue(animal3);
    q.enqueue(animal4);

    // dogs
    q.enqueue(animal5);
    q.enqueue(animal6);
    q.enqueue(animal7);

    // dequeue() should remove and return the front node of cat queue
    // because lengths of cat queue > dog queue
    const dequeued = q.dequeue('');
    expect(dequeued.value.type).toEqual('cat');
    expect(dequeued.value.name).toEqual('silly');
    // front should be updated to the next node
    expect(q.catShelter.front.value.name).toEqual('pasta');

    // dequeue() now will return an array of two nodes from both queues
    // because length of cat queue === dog queue
    const dequeued2 = q.dequeue('');
    expect(dequeued2[0].value.type).toEqual('dog');
    expect(dequeued2[0].value.name).toEqual('wolverine');
    expect(dequeued2[1].value.type).toEqual('cat');
    expect(dequeued2[1].value.name).toEqual('pasta');
  });
});
