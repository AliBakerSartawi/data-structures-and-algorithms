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

  it('can properly insertAtIndex()', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertAtIndex(2, 1);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {1} -> {30} -> null`);
  });

  it('can append() at the tail', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.append(40);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
  });

  // it('can append() at the tail multiple nodes', () => {
  //   const ll = LL.fromValues(10, 20, 30);
  //   const arr = [40, 50, 60];
  //   const multiple = ll.append(arr);
  //   const toString = ll.toString();
  //   console.log(multiple);
  //   expect(toString).toEqual(`{10} -> {20} -> {30} -> {40} -> {50} -> {60} -> null`);
  // });

  it('can insertBefore() the head', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertBefore(10, 1);
    const toString = ll.toString();
    expect(toString).toEqual(`{1} -> {10} -> {20} -> {30} -> null`);
  });

  it('can insertBefore() a value in the middle', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertBefore(30, 25);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {25} -> {30} -> null`);
  });

  it('can insertBefore() null, same as append', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertBefore(null, 40);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
  });

  it('insertBefore() can return Exception if value does not exist', () => {
    const ll = LL.fromValues(10, 20, 30);
    const exception = ll.insertBefore(50, 40);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> null`);
    expect(exception).toEqual('Exception');
  });

  it('insertAfter() null can return Exception', () => {
    const ll = LL.fromValues(10, 20, 30);
    const exception = ll.insertAfter(null, 40);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> null`);
    expect(exception).toEqual('Exception');
  });

  it('can insertAfter() the tail, same as append', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertAfter(30, 40);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
  });

  it('can insertAfter() a value in the middle', () => {
    const ll = LL.fromValues(10, 20, 30);
    ll.insertAfter(20, 25);
    const toString = ll.toString();
    expect(toString).toEqual(`{10} -> {20} -> {25} -> {30} -> null`);
  });
});
