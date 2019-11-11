/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length < 2 || k === 0) {
    return 0;
  }
  if (k >= Math.floor(prices.length / 2)) {
    let res = 0;
    for (let i = 1; i < prices.length; ++i) {
      if (prices[i] > prices[i - 1]) {
        res += prices[i] - prices[i - 1];
      }
    }
    return res;
  }

  let dp = [];
  for (let j = 0; j <= k; j++) {
    dp[j] = [0, Number.MIN_SAFE_INTEGER];
  }
  let i, j;
  for (i = 0; i < prices.length; i++) {
    for (j = k; j > 0; j--) {
      dp[j][0] = Math.max(dp[j][1] + prices[i], dp[j][0]);
      dp[j][1] = Math.max(dp[j - 1][0] - prices[i], dp[j][1]);
    }
  }
  return dp[k][0];
};
