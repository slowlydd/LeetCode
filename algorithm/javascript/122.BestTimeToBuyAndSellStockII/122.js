/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <= 1) {
    return 0;
  } else {
    let max = 0;
    let min = 0;
    let maxValue = 0;
    let temp = 0;
    for(let i = 1; i < prices.length; i++) {
      if(prices[i] > prices[max]) {
        max = i;
      } else {
        maxValue = maxValue + (prices[max] - prices[min]);
        min = i;
        max = i;
      }
    }
    return maxValue + prices[max] - prices[min];
  }
};

maxProfit([7,6,4,3,1]);