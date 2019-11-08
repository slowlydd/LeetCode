/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let tempNums = [];
  for(let i = 0; i < nums.length; i++) {
    tempNums[i] = i;
  }
  tempNums.sort((a, b) => {
    return nums[a] - nums[b];
  });
  let res = false;
  let j = 0;
  for (let i = 1; i < tempNums.length; ) {
    if (Math.abs(nums[tempNums[i]] - nums[tempNums[j]]) <= t) {
      if (Math.abs(tempNums[i] - tempNums[j]) <= k) {
        return true;
      }
      i++;
    } else {
      j++;
    }
    if(i === j) {
      i++;
    }
  }
  return false;
};
