/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex === 0) {
    return [1];
  }

  if(rowIndex === 1) {
    return [1, 1];
  }

  let res = [1, 1];

  for(let i = 1; i < rowIndex; i++) {
    let base = res;
    res = [1];
    for(let j = 0; j < base.length - 1; j++) {
      res[res.length] = base[j] + base[j + 1];
    }
    res[res.length] = 1;
  }
  return res;
};

getRow(3);