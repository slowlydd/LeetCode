/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if(array[array.length - 1]) {
      array[array.length] = 1;
    } else {
      array[array.length - 1] = 1;
    }
  }
};