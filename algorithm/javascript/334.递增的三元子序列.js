/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) {
    return false;
  } else {
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] <= min) {
        min = nums[i];
        continue;
      }
      if(nums[i] > max && min < max) {
        return true;
      } else {
        max = nums[i];
      }
    }
    return false;
  }
};

increasingTriplet([1, 1, -2, 6]);
