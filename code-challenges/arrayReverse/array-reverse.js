'use strict';

function reverseArray(arr) {
  let reversedArr = [];
  reversedArr.length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    reversedArr[i] = arr[arr.length - (i + 1)];
  }

  return reversedArr;
}

module.exports = reverseArray;
