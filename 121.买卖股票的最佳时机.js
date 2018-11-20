/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) {
      return 0;
    } else {
      let min = 0;
      let max = 0;
      let maxValue = 0;
      for(let i = 1; i < prices.length; i++) {
        if(prices[i] < prices[min]) {
          min = i;
          max = i;
        }
        if(prices[i] > prices[max]) {
          maxValue = Math.max(prices[i] - prices[min], maxValue);
          max = i;
        }
      }
      return maxValue;
    }
};

maxProfit([3,2,6,5,0,3]);