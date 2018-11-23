/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let temp;
  for (let i = 0; i < k; i++) {
    temp = nums[nums.length - 1];
    for (let j = nums.length - 2; j >= 0; j--) {
      nums[j + 1] = nums[j];
    }
    nums[0] = temp;
  }
  return nums;
};

rotate([1,2,3,4,5,6,7], 3);