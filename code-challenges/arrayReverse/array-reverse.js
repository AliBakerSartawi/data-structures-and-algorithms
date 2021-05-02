'use strict';

function reverseArray(arr) {
  const reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
}

module.exports = reverseArray;