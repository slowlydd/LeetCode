/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 待完成
var searchMatrix = function (matrix, target) {
  let n = matrix.length;
  // 0列矩阵， 0 x n 矩阵
  if (n === 0) {
    return false;
  }
  let m = matrix[0].length;
  if (m === 0) {
    return false;
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j <matrix[0])
  }
};

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = 0;
  while (right - left > 1) {
    mid = parseInt((right - left) / 2 + left);
    if (target === array[mid]) {
      return true;
    }

    if (target > array[mid]) {
      left = mid;
    }

    if (target < array[mid]) {
      right = mid;
    }
  }
  if (array[left] === target || array[right] === target || array[mid] === target) {
    return true;
  } else {
    return false;
  }
}

searchMatrix(
  [
    [-10, -10],
    [-9, -9],
    [-8, -6],
    [-4, -2],
    [0, 1],
    [3, 3],
    [5, 5],
    [6, 8]
  ],
  0);