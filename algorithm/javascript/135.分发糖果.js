/**
 * @param {number[]} ratings
 * @return {number}
 */
// 解法 1
var candy = function(ratings) {
  if (ratings.length <= 1) {
    return ratings.length;
  } else {
    let candys = [];
    candys.length = ratings.length;
    candys.fill(1, 0);
    // 计算与左边相邻有关的糖果数
    for(let i = 1; i < ratings.length; i++) {
      if(ratings[i] > ratings[i - 1]) {
        candys[i] = candys[i - 1] + 1;
      }
    }
    // 计算与右边相邻有关的糖果数
    for(let i = ratings.length - 2; i >= 0; i--) {
      if(ratings[i] > ratings[i + 1] && candys[i] <= candys[i+1]) {
        candys[i] = candys[i + 1] + 1;
      }
    }
    // 计算糖果数
    let sum = 0;
    for(let i = 0; i < ratings.length; i++) {
      sum = sum + candys[i];
    }
    return sum;
  }
};

// 解法 2
var candy = function(ratings) {
  if (ratings.length <= 1) {
    return ratings.length;
  } else {
    let candies = 0;
    let up = 0;
    let down = 0;
    let old_slope = 0;
    for(let i = 1; i < ratings.length; i++) {
      let new_slope = (ratings[i] > ratings[i - 1]) ? 1 : (ratings[i] < ratings[i - 1] ? -1 : 0)
      if((old_slope > 0 && new_slope === 0) || (old_slope < 0 && new_slope >= 0)) {
        candies += count(up) + count(down) + Math.max(up, down);
        up = 0;
        down = 0;
      }

      if(new_slope > 0) {
        up++;
      }

      if(new_slope < 0) {
        down++;
      }

      if(new_slope === 0) {
        candies++;
      }
      old_slope = new_slope;
    }
    candies = candies + count(up) + count(down) + Math.max(up, down) + 1;
    return candies;
  }
}

function count(n) {
  return (n * (n + 1)) / 2;
}