/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let sp = 0
  for(let up = 0; up < nums.length; up++) {
    if(nums[sp] === nums[up]) {
      continue;
    } else {
      nums[++sp] = nums[up]
    }
  }
  return sp + 1
};
// @lc code=end

