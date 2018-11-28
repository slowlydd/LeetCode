/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = 1;
  if(nums.length <= 1) {
      return nums.length;
  } else {
      for(let i = 1; i < nums.length; i++) {
          if(nums[i - 1] != nums[i]) {
              nums[len++] = nums[i];
          }
      }
  }
  return len;
};