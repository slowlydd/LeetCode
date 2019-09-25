/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  let temp;
  for(let i = 0; i < nums.length; i++) {
    temp = Math.abs(nums[i]) - 1;
    nums[temp] = Math.abs(nums[temp]) * -1;
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);