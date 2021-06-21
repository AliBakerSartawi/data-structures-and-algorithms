'use strict';

function treeIntersection(bst1, bst2) {
  // bfs() -> breadth first search
  let arr1 = bst1.bfs();
  let arr2 = bst2.bfs();
  let intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) intersectionArr.push(arr1[i]);
    }
  }

  return intersectionArr.length ? intersectionArr : 'No Intersection';
}

module.exports = treeIntersection;
