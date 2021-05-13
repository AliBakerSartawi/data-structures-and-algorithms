'use strict';

const LL = require('./linked-list');

describe('Linked List', () => {
  it('can create empty linked list', () => {
    const ll = new LL();
    expect(ll.head).toEqual(null);
  });

  it('can properly insert at the head', () => {
    const ll = new LL();
    ll.insertAtHead(10);
    expect(ll.head.value).toEqual(10);
  });

  it('head points to next properly', () => {
    const ll = LL.fromValues(10, 20, 30);
    expect(ll.head.next.value).toEqual(20);
  });

  it('can insert multiple nodes into the linked list', () => {
    const ll = LL.fromValues(10, 20, 30);
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next.value).toEqual(20);
    expect(ll.head.next.next.value).toEqual(30);
  });

  it('returns true when finding a value within the linked list', () => {
    const ll = LL.fromValues(10, 20, 30);
    const includes = ll.includes(20);
    expect(includes).toEqual(true);
  });

  it('returns false when value does not exist in linked list', () => {
    const ll = LL.fromValues(10, 20, 30);
    const includes = ll.includes(40);
    expect(includes).toEqual(false);
  });

  it('can properly return a collection of all the values in the linked list', () => {
    const ll = LL.fromValues(10, 20, 30);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> null`);
  });
});
