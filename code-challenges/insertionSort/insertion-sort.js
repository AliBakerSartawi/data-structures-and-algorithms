'use strict';

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    // grabbing the current element
    let temp = arr[i];

    // the last sorted element
    let j = i - 1;

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = insertionSort;
