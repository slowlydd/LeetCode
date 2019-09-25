/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 增量为1；
  let temp = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + temp;
    if (num >= 10) {
      digits[i] = num % 10;
      temp = 1;
    } else {
      digits[i] = num;
      temp = 0;
      break;
    }
  }

  if (temp == 1) {
    let res = [1];
    for (let i = 0; i < digits.length; i++) {
      res[res.length] = digits[i];
    }
    return res;
  } else {
    return digits;
  }

};

plusOne([0]);