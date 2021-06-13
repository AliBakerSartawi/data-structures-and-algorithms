const insertionSort = require('./insertion-sort.js');

describe('#insertionSort()', () => {

  const arr = [8,4,23,42,16,15];
  const arr2 = [20,18,12,8,5,-2];
  const arr3 = [5,12,7,5,5,7];
  const arr4 = [2,3,5,7,13,11];

  test('Works super fine', () => {
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertionSort(arr2)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(insertionSort(arr3)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(insertionSort(arr4)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
