/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length
    let min = prices[0]
    let profit = 0
    for(let i = 1; i < len; i++) {
        if(prices[i] > prices[i - 1]) {
            profit = Math.max(profit, prices[i] - min)
        } else {
            min = Math.min(min, prices[i])
        }
    }
    return profit
};