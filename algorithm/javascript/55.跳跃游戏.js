/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let position = 0;
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (i <= position) {
      if (nums[i] + i >= end) {
        return true;
      } else {
        if (position < nums[i] + i) {
          position = nums[i] + i;
        }
      }
    } else {
      return false;
    }
  }
  return false;
};
