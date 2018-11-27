/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max = 0;
  let array = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i]) {
      array[i] = dp(i, nums, array);
      max = Math.max(max, dp(i, nums, array));
    }
  }
  return max;
};

function dp(i, nums, array) {
  if(array[i]) {
    return array[i];
  }
  if(i < 0) {
    return 0;
  }
  if(i < 2) {
    return nums[i];
  } else {
    return Math.max(dp(i - 2, nums, array), dp(i - 3, nums, array)) + nums[i];
  }
}
rob([2,7,9,3,1]);