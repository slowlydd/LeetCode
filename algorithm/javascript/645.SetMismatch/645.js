/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let sum = 0;
  let obj = {};
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = i + 1 + sum - nums[i];
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      temp = nums[i];
    }
  }
  return [temp, temp + sum];
};

findErrorNums([1, 2, 2, 4]);