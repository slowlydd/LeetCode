/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0;
  let j = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    res = res + (s.charCodeAt(i) - 64) * Math.pow(26, j++);
  }
  return res;
};

titleToNumber("ZY");