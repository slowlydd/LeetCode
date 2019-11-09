/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2) {
    return 0;
  }
   let maxValue = 0;
   let value = 0;
  for(let i = 0; i <= prices.length; i++) {
    value = halfMaxProfit(prices.slice(0, i)) + halfMaxProfit(prices.slice(i));
    if(value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
};

var halfMaxProfit = function(prices) {
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

maxProfit([3,3,5,0,0,3,1,4]);