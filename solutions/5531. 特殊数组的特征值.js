/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a, b) => a - b)
  let len = nums.length
  for(let i = 0; i < len; i++) {
    let num = len - i
    if(nums[i] >= num) {
      if(nums[i - 1]) {
        if(num > nums[i - 1]) return num
      } else {
        return num
      }
    }
  }
  return -1
};