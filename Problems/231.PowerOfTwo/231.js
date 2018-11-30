/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if(n <= 0) {
    return false;
  }

  if (n <= 2) {
    return true;
  } else {
    if (n % 2 === 0) {
      do {
        n = n / 2;
        if (~String(n).indexOf('.')) {
          return false;
        }
      } while (n !== 1);
      return true;
    } else {
      return false;
    }
  }
};

isPowerOfTwo(16)