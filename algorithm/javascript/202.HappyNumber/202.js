/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let array = [];
  while (n !== 1) {
    if (~array.indexOf(n)) {
      return false;
    }
    array.push(n);
    let num = [];
    do {
      num[num.length] = n % 10;
      n = parseInt(n / 10);
    } while (n !== 0);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum = sum + num[i] * num[i];
    }
    n = sum;
  }
  return true;
};

isHappy(19);