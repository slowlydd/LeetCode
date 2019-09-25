/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  let res = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (res != 0) {
        break;
      }
    } else {
      res++;
    }
  }

  return res;
};

lengthOfLastWord("");