/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//方法一：此种递归方法重复调用栈的次数太多，超出时间限制
var uniquePaths = function(m, n) {
  if(m === 1 && n === 1) {
      return 1;
  } else {
    if(m === 1) {
      return uniquePaths(1, n - 1);
    }

    if(n === 1) {
      return uniquePaths(m - 1, 1);
    }
    return uniquePaths(m, n - 1) + uniquePaths(m - 1, n);
  }
};

// 方法二：利用数组记录已经递归过的结果，直接取用
var uniquePaths = function (m, n) {
  let array = [];
  // 初始化一个二维数组，js就是有点尴尬
  for (let i = 0; i <= m + 1; i++) {
    array[array.length] = [];
    for (let j = 0; j <= n + 1; j++) {
      array[i][j] = null;
    }
  }
  array[1][1] = 1;
  return dp(m, n, array);
};

function dp(m, n, array) {
  if (array[m][n]) {
    return array[m][n];
  }
  if (m === 1) {
    array[1][n - 1] = dp(1, n - 1, array);
    return array[1][n - 1];
  }

  if (n === 1) {
    array[m - 1][n] = dp(m - 1, n, array);
    return array[m - 1][n];
  }
  array[m - 1][n] = dp(m - 1, n, array);
  array[m][n - 1] = dp(m, n - 1, array);
  return array[m - 1][n] + array[m][n - 1];
}

uniquePaths(23, 12);