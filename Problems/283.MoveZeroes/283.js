/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) {
    return nums;
  } else {
    let start = 0;
    let num0 = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        if (num0) {
          nums[start] = nums[i];
          nums[i] = 0;
          num0++;
        }
        start++;
      } else {
        num0++;
      }
    }
    return nums;
  }
};

moveZeroes([1, 0, 1]);