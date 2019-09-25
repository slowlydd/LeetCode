/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let str = "";
  while (n !== 0) {
    str = (n % 2) + str;
    n = parseInt(n / 2);
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      sum++;
    }
  }
  return sum;
};

hammingWeight(11)