/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0) {
    return [];
  }

  if(numRows === 1) {
    return [[1]]
  }

  if(numRows === 2) {
    return [[1], [1, 1]];
  }

  let res = [
    [1],
    [1, 1]
  ];

  for (let i = 2; i < numRows; i++) {
    res[i] = [1]
    for(let j = 0; j < res[i - 1].length - 1; j++) {
      res[i][res[i].length] = res[i - 1][j] + res[i - 1][j + 1];
    }
    res[i][res[i].length] = 1;
  }
  return res;
};

generate(33);