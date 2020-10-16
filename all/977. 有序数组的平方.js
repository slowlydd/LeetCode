/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let l = 0,r = A.length - 1
  let size = A.length - 1
  let res = []
  while(l <= r) {
    if(A[l] * A[l] >= A[r] * A[r]) {
      res[size--] = A[l] * A[l]
      l++
    } else {
      res[size--] = A[r] * A[r]
      r--
    }
  }
  return res
};