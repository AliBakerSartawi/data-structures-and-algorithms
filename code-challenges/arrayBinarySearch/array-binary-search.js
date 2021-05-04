'use strict';

function binarySearch(sortedArr, searchKey) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let middle = Math.ceil((start + end) / 2);

    if (sortedArr[middle] === searchKey) {
      // found the index
      return middle;
    } else if (sortedArr[middle] < searchKey) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // continue searching to the left
      end = middle - 1;
    }
  }
  // search key not in array
  return -1;
}

module.exports = binarySearch;