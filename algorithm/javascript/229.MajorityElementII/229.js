/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!nums.length) {
    return [];
  } else {
    let majority1 = nums[0], majority2 = nums[0];
    let majority1Num = 0, majority2Num = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === majority1) {
        majority1Num++;
        continue;
      }
      if (nums[i] === majority2) {
        majority2Num++;
        continue;
      }

      if (majority1Num === 0) {
        majority1 = nums[i];
        majority1Num++;
        continue;
      }
      if (majority2Num === 0) {
        majority2 = nums[i];
        majority2Num++;
        continue;
      }
      majority1Num--;
      majority2Num--;
    }
    majority1Num = 0;
    majority2Num = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === majority1) {
        majority1Num++;
        continue;
      }
      if (nums[i] === majority2) {
        majority2Num++;
      }
    }

    let res = [];
    if (majority1Num > nums.length / 3) {
      res.push(majority1);
    }
    if (majority2Num > nums.length / 3) {
      res.push(majority2);
    }
    return res;
  }
};