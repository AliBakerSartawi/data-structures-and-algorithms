'use strict';

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  append(value) {
    let current = this.head;
    let prev = null;
    if (value.length === undefined) { // type: number
      while(current) {
        prev = current;
        current = current.next;
        if (prev.next === null) {
          prev.next = new LinkedListNode(value, null);
          this.length++;
          // break;
        }
      }
    }

    // if (value.length === 0) {
    //   return 'Cannot append empty array';
    // } else if (Array.isArray(value)) {
    //   let i = 0;
    //   while(current) {
    //     prev = current;
    //     current = current.next;
    //     if (prev.next === null) {
    //       prev.next = new LinkedListNode(value[i], null);
    //       i++;
    //       this.length++;
    //       // break;
    //     }
    //   }
    // }
  }

  insertBefore(value, newValue) {
    if (value === this.head.value) {
      return this.insertAtHead(newValue);
    }
    if (value === null) {
      return this.append(newValue);
    }

    let current = this.head;
    let next = current.next;
    while (next) {
      if (current.next.value === value) {
        current.next = new LinkedListNode(newValue, current.next);
        this.length++;
        return current.next;
      }
      current = next;
      next = current.next;
    }
    return 'Exception'; // if value does not exist in ll
  }

  insertAfter(value, newValue) {
    if (value === null) {
      return 'Exception'; // cannot append after null
    }

    let current = this.head;
    let next = current.next;
    while (current) {
      if (current.value === value) {
        next = new LinkedListNode(newValue, current.next);
        current.next = next;
        this.length++;
        return next;
      }
      current = next;
      next = current.next;
    }
    return 'Exception'; // if value does not exist in ll
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) {
      return this.removeHead();
    }

    const prev = this.getByIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = prev.next.next;
    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  getMiddle() {
    const index = Math.floor(this.length / 2);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  getKthFromEnd(k) {
    if (k < 0 || k >= this.length) {
      return 'Exception';
    }
    const index = (this.length - 1) - k;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    if (k > 0 && k < (this.length - 1)) {
      return {
        path: 'Happy Path',
        node: current,
      };
    }

    return current;
  }

  includes(value) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}{${current.value}} -> `;
      current = current.next;
    }
    return `${output}null`;
  }

}

// helper function to create LL from an array or multiple values
LinkedList.fromValues = function(...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

class LinkedListNode {

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

}

module.exports = LinkedList;
