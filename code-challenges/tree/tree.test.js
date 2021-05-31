// 'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./tree');

describe(':::: BinarySearchTree 🌳 :::', () => {

  it('#constructor() ---> instantiates empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst instanceof BinarySearchTree).toBeTruthy();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('#constructor() ---> instantiates tree with single root node', () => {
    const bst = new BinarySearchTree(10);
    expect(bst.root.value).toEqual(10);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('#add() ---> adds left and right nodes to single root tree', () => {
    const bst = new BinarySearchTree(10);
    bst.add(5);
    bst.add(15);
    expect(bst.root.value).toEqual(10);
    expect(bst.root.left.value).toEqual(5);
    expect(bst.root.right.value).toEqual(15);
  });


  // Example Tree
  //         (15)
  //   (3)         (36)
  // (2)  (12)   (28)   (39)


  let bst = null;

  beforeAll(() => {
    bst = new BinarySearchTree(15);
    bst.add(3);
    bst.add(12);
    bst.add(2);
    bst.add(36);
    bst.add(28);
    bst.add(39);
  });

  // (15), 3, 2, 12, 36, 28, 39
  it('#dfsPreOrder() ---> returns collection from a pre-order traversal', () => {
    expect(bst.dfsPreOrder()).toEqual([15, 3, 2, 12, 36, 28, 39]);
  });

  // 2, 3, 12, (15), 28, 36, 39
  it('#dfsInOrder() ---> returns collection from an in-order traversal', () => {
    expect(bst.dfsInOrder()).toEqual([2, 3, 12, 15, 28, 36, 39]);
  });

  // 2, 12, 3, 28, 39, 36, (15)
  it('#dfsPostOrder() ---> returns collection from a post-order traversal', () => {
    expect(bst.dfsPostOrder()).toEqual([2, 12, 3, 28, 39, 36, 15]);
  });

  it('#contains() ---> returns false 🔴 if value does not exist in tree', () => {
    expect(bst.contains(100)).toEqual(false);
  });

  it('#contains() ---> returns true 🟢 if value exists in tree', () => {
    expect(bst.contains(3)).toEqual(true);
  });

  // ----- EXTRA TESTING -----
  it('#size() ---> returns number of nodes in the tree', () => {
    expect(bst.size()).toEqual(7);
  });

  // breadth first search
  // (15), 3, 36, 2, 12, 28, 39
  it('#bfs() ---> returns collection from a breadth first search', () => {
    expect(bst.bfs()).toEqual([15, 3, 36, 2, 12, 28, 39]);
  });

  // breadth first search --- without built-in methods
  // (15), 3, 36, 2, 12, 28, 39
  it('#bfs() ---> returns collection from a breadth first search', () => {
    expect(bst.bfsWithoutBuiltInMethods()).toEqual([15, 3, 36, 2, 12, 28, 39]);
  });

  it('#min() ---> returns smallest value in the tree', () => {
    expect(bst.min()).toEqual(2);
  });

  it('#max() ---> returns greatest value in the tree', () => {
    expect(bst.max()).toEqual(39);
  });
  
});

describe(':::: findMaxVal ↗️ & breadthSearchFirst ::::', () => {

  // Example Tree
  //          (2)
  //       /      \
  //    (7)         (5)
  //   /  \           \
  // (2)  (6)          (9)
  //     /  \          /
  //   (5)  (11)     (4)


  let tree;

  beforeAll(() => {
    tree = new BinaryTree(2);

    let two = new Node(7);
    let three = new Node(5);
    let four = new Node(2);
    let five = new Node(6);
    let six = new Node(9);
    let seven = new Node(5);
    let eight = new Node(11);
    let nine = new Node(4);

    tree.root.left = two;
    tree.root.right = three;
    two.left = four;
    two.right = five;
    three.right = six;
    five.left = seven;
    five.right = eight;
    six.left = nine;

  });

  it('#findMaxVal() ---> returns greatest value in BinaryTree (not just a BST)', () => {
    expect(tree.findMaxVal()).toEqual(11);
  });

  // ---EXTRA---
  it('EXTRA #updateCount() ---> updates the size of the tree when nodes are added manually without an insert method', () => {
    expect(tree.count).toEqual(1);
    tree.updateCount();
    expect(tree.count).toEqual(9);
  });

  // bfs() with built-in language methods (push and pop)
  it('#bfs() ---> returns a collection of the nodes in the tree level by level', () => {
    expect(tree.bfs()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  // bfs() without built-in language methods (push and pop)
  it('#bfsWithoutBuiltInMethods() ---> returns a collection of the nodes in the tree level by level', () => {
    expect(tree.bfsWithoutBuiltInMethods()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
