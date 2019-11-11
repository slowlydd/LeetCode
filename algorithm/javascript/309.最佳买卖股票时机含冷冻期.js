/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2) {
    return 0;
  } else {
    let dp = [], N = prices.length;
    for(let i = 0; i < N; i++) {
      dp[i] = [];
      dp[i][0] = 0;
      dp[i][1] = Number.MIN_SAFE_INTEGER;
    }
    // base case
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[1][1] = Math.max(-prices[1],  -prices[0]);
    dp[1][0] = Math.max(prices[1] - prices[0], 0);

    for(let i = 2; i < N; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
    return dp[N - 1][0];
  }
};

maxProfit([1,2,4]);