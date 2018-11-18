/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  } else {
    let max = 0;
    for (let i = 1; i < A.length - 1; i++) {
      if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
        max = i;
        break;
      }
    }

    if(max === 0) {
      return false;
    }

    let left = true;
    for (let i = 1; i < max; i++) {
      if (A[i] <= A[i - 1]) {
        left = false;
      }
    }
    let right = true;
    for (let i = max; i < A.length - 1; i++) {
      if (A[i] <= A[i + 1]) {
        right = false;
      }
    }

    if (left && right) {
      return true;
    } else {
      return false;
    }
  }
};

validMountainArray([9,8,7,6,5,4,3,2,1,0]);