/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  if (S.length === 0) {
    return [];
  }
  let res = [];
  let left = 0;
  let right = S.length;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "I") {
      res[res.length] = left;
      left++;
    } else {
      res[res.length] = right;
      right--;
    }
  }
  res[res.length] = right--;
  return res;
};