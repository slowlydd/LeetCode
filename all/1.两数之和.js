/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  let diff
  for(let i = 0; i < nums.length; i++) {
    diff = target - nums[i]
    if(map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(nums[i], i)
    }
  }
};
// @lc code=end

