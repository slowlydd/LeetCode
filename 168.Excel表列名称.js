/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let s = "";
  let temp;
  while(Math.floor(n / 26) !== 0) {
    temp = n % 26;
    n = Math.floor(n / 26);
    if(temp !== 0) {
      s = String.fromCharCode(temp + 64) + s;
    } else {
      s = 'Z' + s;
      n = n - 1;
    }
  }
  if(n) {
    s = String.fromCharCode(n + 64) + s;
  }
  return s;
};

convertToTitle(52);
