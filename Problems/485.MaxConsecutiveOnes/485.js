/**
 * @param {number[]} nums
 * @return {number}
 */
// 计数问题，往往都会考虑到在条件更改的时候重新计数，但是容易忽略如果没有触发条件更改的情况
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      res = count > res ? count : res;
      count = 0;
    }
  }
  return count > res ? count : res;
};

findMaxConsecutiveOnes([1]);