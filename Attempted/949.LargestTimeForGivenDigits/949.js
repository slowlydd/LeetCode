/**
 * @param {number[]} A
 * @return {string}
 */
// 待完成
var largestTimeFromDigits = function (A) {
  let array = []
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      let temp = A.slice(0);
      let num = temp[i];
      temp[i] = temp[j];
      temp[j] = num;
      array.push(temp.join(""));
    }
  }
  array.sort();
  for(let i = array.length - 1; i > 0; i--) {
    if(array[i] <= "2359") {
      return array[i][0] + array[i][1] + ':' + array[i][2] + array[i] [3];
    }
  }
  return "";
};

largestTimeFromDigits([1, 2, 3, 4]);