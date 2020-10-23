/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  // 动态规划
  let dp = new Array(T + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for(let i = 1; i<= T; i++) {
    for(let j = 0; j < clips.length; j++) {
      if(clips[j][0] < i && i <= clips[j][1]) {
        dp[i] = Math.min(dp[i], dp[clips[j][0]] + 1)
      }
    }
  }
  return dp[T] = dp[T] === Number.MAX_SAFE_INTEGER ? - 1 : dp[T]
};

var videoStitching = function(clips, T) {
  // 贪心算法
  let maxn = new Array(T).fill(0) // 这里注意数组没有初始化是 undefined
  let last = 0, ret = 0, pre = 0
  for(let i = 0; i < clips.length; i++) {
    if(clips[i][0] < T) {
      maxn[clips[i][0]] = Math.max(maxn[clips[i][0]], clips[i][1]) // 这里与 undefined 比较会出现 NaN
    }
  }

  for(let j = 0; j < T; j++) {
    last = Math.max(last, maxn[j])
    if(j === last) {
      return -1
    }
    if( j === pre) {
      ret++
      pre = last
    }
  }
  return ret
};