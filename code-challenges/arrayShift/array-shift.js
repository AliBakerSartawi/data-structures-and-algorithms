'use strict';

function insertShiftArray(arr, val) {
  const shiftedArr = [];
  shiftedArr.length = arr.length + 1;
  const middleIndex = Math.ceil(arr.length / 2);

  populateUntilMiddle(shiftedArr, middleIndex, arr, val);

  populateAfterMiddle(shiftedArr, middleIndex, arr);

  return shiftedArr;
}

function populateUntilMiddle(shiftedArr, middleIndex, arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (i === middleIndex) {
      shiftedArr[i] = val;
      break;
    }
    shiftedArr[i] = arr[i];
  }
}

function populateAfterMiddle(shiftedArr, middleIndex, arr) {
  for (let i = middleIndex + 1; i < shiftedArr.length; i++) {
    shiftedArr[i] = arr[i - 1];
  }
}

module.exports = insertShiftArray;
