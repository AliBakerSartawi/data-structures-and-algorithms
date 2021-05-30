'use strict';

class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(value) {
    this.root = new Node(value);
    this.count = 1; // keep track how many nodes in the tree
  }

  size() {
    return this.count;
  }

  // --- depth first search --- branch by branch

  // Example Tree
  //         (15)
  //   (3)         (36)
  // (2)  (12)   (28)   (39)

  // in-order (from left to right regardless of level)
  // left, root/parent, right
  // 2, 3, 12, (15), 28, 36, 39
  dfsInOrder() {
    let result = [];

    // nested recursive function
    const traverse = (node) => {
      // if left child, go left again
      if (node.left) traverse(node.left);

      // capture node value
      result.push(node.value);

      // if right child, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  // pre-order (parents over children)
  // root, left, right
  // (15), 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = [];

    // nested recursive function
    const traverse = (node) => {
      // capture node value
      result.push(node.value);

      // if left child, go left again
      if (node.left) traverse(node.left);

      // if right child, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  // post-order (children over parents)
  // left, right, root
  // 2, 12, 3, 28, 39, 36, (15)
  dfsPostOrder() {
    let result = [];

    // nested recursive function
    const traverse = (node) => {
      // if left child, go left again
      if (node.left) traverse(node.left);

      // if right child, go right again
      if (node.right) traverse(node.right);

      // capture node value
      result.push(node.value);
    };
    traverse(this.root);

    return result;
  }

  // --- breadth first search --- level by level
  // using a queue!
  // (15), 3, 36, 2, 12, 28, 39
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    // or queue.peek() if queue is a class
    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  // this method can be useful if nodes are added manually
  // ... without an insert method
  updateCount() {
    this.count = this.bfs().length;
  }

  // without using built-in methods
  findMaxVal() {
    let maxVal = this.root.value;

    // nested recursive function
    const traverse = (node) => {
      // if left child, go left again
      if (node.left) traverse(node.left);

      // if right child, go right again
      if (node.right) traverse(node.right);

      // capture node value if greater than maxVal
      maxVal = node.value > maxVal ? node.value : maxVal;
    };
    traverse(this.root);

    return maxVal;
  }

}

class BinarySearchTree extends BinaryTree {

  add(value) {
    this.count++;

    let newNode = new Node(value);

    // recursive search algorithm
    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append newNode
        if (!node.left) {
          node.left = newNode;
        }
        // if left child, look left again
        else {
          searchTree(node.left); // recursive call
        }
      }
      // if value > node.value, go left
      else if (value > node.value) {
        // if no right child, append newNode
        if (!node.right) {
          node.right = newNode;
        }
        // if right child, look right again
        else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  // min value is the most left leaf
  min() {
    let currentNode = this.root;

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  // max is the most right leaf
  max() {
    let currentNode = this.root;

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};

