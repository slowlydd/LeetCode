/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  } else {
    nums = nums.sort();
    let i = 0;
    while(i < nums.length - 1) {
      if(nums[i] === nums[i + 1]) {
        i = i + 2;
      } else {
        return nums[i];
      }
    }
    return nums[nums.length - 1];
  }
};

singleNumber([2,2,1]);