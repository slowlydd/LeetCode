/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = [];
  let temp;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.abs(nums[i]) - 1;
    if (nums[temp] < 0) {
      res.push(temp + 1);
    } else {
      nums[temp] = nums[temp] * -1;
    }
  }
  return res;
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 8]);