/**
 * @param {number[]} A
 * @return {number}
 */
// 动态规划枚举山顶
var longestMountain = function(A) {
  let len = A.length
  if(!n) return 0
  let left = [], right = []
  for(let i = 1; i < n; i++) {
    left[i] = A[i - 1] < A[i]? left[i - 1] + 1 : 0;
  }

  for(let i = n - 2; i >= 0; i--) {
    right[i] = A[i +1] < A[i] ? right [i+1] + 1: 0
  }

  let ret = 0
  for(let i = 0; i < n; i++) {
    if(left[i] && right[i]) {
      ret = Math.max(ret, left[i] + right[i] + 1)
    }
  }
  return ret
};

// 枚举山脚
var longestMountain = function(A) {
  let n = A.length
  let ans = 0
  let left = 0
  // 保证最少有三个元素
  while (left + 2 < n) {
    // 固定左侧山脚
    let right= left + 1
    if(A[left] < A[left + 1]) {
      // 寻找山顶
      while(right + 1 < n && A[right] < A[right + 1]) {
        right++
      }
      // 确定山顶
      if(right < n - 1 && A[right] > A[right + 1]) {
        while(right + 1 < n && A[right] > A[right + 1]) {
          ++right
        }
        ans = Math.max(ans, right - left + 1)
      } else {
        // 寻找右侧山脚
        ++right 
      }
    }
    left = right
  }
  return ans
};