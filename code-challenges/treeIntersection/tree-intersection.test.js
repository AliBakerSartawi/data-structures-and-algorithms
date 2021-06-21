'use strict';

const BST = require('../tree/tree').BinarySearchTree;
const treeIntersection = require('./tree-intersection');

describe('treeIntersection', () => {

  let bst1, bst2, bst3;
  beforeEach(() => {
    bst1 = new BST(10);
    bst1.add(3);
    bst1.add(12);
    bst1.add(2);
    bst1.add(36);
    bst1.add(28);
    bst1.add(39);

    bst2 = new BST(20);
    bst2.add(4);
    bst2.add(12);
    bst2.add(5);
    bst2.add(36);
    bst2.add(46);
    bst2.add(39);

    bst3 = new BST(30);
    bst3.add(41);
    bst3.add(121);
    bst3.add(51);
    bst3.add(361);
    bst3.add(461);
    bst3.add(391);
  });

  it('returns array of shared values', () => {
    expect(treeIntersection(bst1, bst2)).toEqual([12, 36, 39]);
  });

  it('returns `No Intersection` if there is none', () => {
    expect(treeIntersection(bst1, bst3)).toEqual('No Intersection');
  });
});



