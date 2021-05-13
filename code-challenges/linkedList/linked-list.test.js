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
});
