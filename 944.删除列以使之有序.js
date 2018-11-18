/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  if(A[0][0].length === 1) {
    return 0;
  } else {
    for (let i = 0; i < A.length; i++) {
      // 将字符串变为数组
      let arrayA = A[i].split("");
      // 记录升序的结果 
      let upA = arrayA.sort();
      // 记录降序的结果
      let downA = arrayA.sort((a, b) => {
        return b - a;
      });
      // 将结果合并为字符串
      let stringUpA = upA.concat("");
      let stringDownA = downA.concat("");
      if(A[i] === stringDownA || A[i] === stringUpA) {
        // 说明原来的数组是有序的
        continue;
      } else {
        // 说明此数组是无序的
        
      }
    }
  }
    
};