/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if(x === 0 || x === 1) {
    return x;
  }
  left = 0;
  right = parseInt(x / 2);
  do {
    mid = parseInt(left + ((right - left) / 2));
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  } while (left <= right);
};
for (let i = 0; i < 100; i++) {
  console.log(mySqrt(i) + '  ' + i);
}

// mySqrt(9);