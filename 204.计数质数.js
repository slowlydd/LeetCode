/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if(n <= 2) {
    return 0;
  }
  if(n === 3) {
    return 1;
  }
  let i = 3;
  let j = 2;
  let res = 1;
  let flag;
  while (i < n) {
    j = 2;
    flag = 0;
    while (j <= Math.ceil(Math.sqrt(i))) {
      if(i % j === 0) {
        flag = 1;
        break;
      }
      j++;
    }
    if(!flag) {
      res++;
    }
    i = i + 2;
  }
  return res;
};