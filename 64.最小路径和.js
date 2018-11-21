/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let array = [];
  for(let i = 0; i < m; i++) {
    array[i] = [];
    for(let j = 0; j < n; j++) {
      array[i][j] = 0;
    }
  }

  return dp(m - 1, n - 1, grid, array);

};

function dp(m, n, grid, array) {
  if(array[m][n]) {
    return array[m][n];
  } else {
    if(m === 0 && n === 0) {
      array[m][n] = grid[m][n];
      return array[m][n];
    } else {
      if(m === 0) {
        array[m][n] = dp(m, n - 1, grid, array) + grid[m][n];
        return array[m][n];
      }

      if(n === 0) {
        array[m][n] = dp(m - 1, n, grid, array) + grid[m][n];
        return array[m][n];
      }

      array[m - 1][n] = dp(m - 1, n, grid, array);
      array[m][n - 1] = dp(m, n - 1, grid, array);
      array[m][n] = Math.min(array[m - 1][n], array[m][n - 1]) + grid[m][n];

      return array[m][n];
    }
  }
}

minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]);

// minPathSum([
//   [1,2],
//   [1,1]
// ]);
// minPathSum([[1,2],[5,6],[1,1]]);