/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  do {
    let sum = 0;
    do {
      let temp = num % 10;
      sum = sum + temp;
      num = parseInt(num / 10);
    } while (num > 0);
    num = sum;
  } while (num >= 10);
  return num;
};

addDigits(10);