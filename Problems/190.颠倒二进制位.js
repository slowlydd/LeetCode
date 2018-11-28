/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if(n === 0) {
    return 0;
  } else {
    let res = "";
    while(n !== 0) {
      res = (n % 2) + res;
      n = parseInt(n / 2);
    }

    for(let i = res.length; i < 32; i++) {
      res = "0" + res;
    }

    let result = 0;
    for(let i = 31; i >= 0; i--) {
      result = result + Math.pow(2, i) * res[i];
    }
    return result;
  }
};

reverseBits(43261596)