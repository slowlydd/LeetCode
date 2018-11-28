/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 待优化
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = parseInt((left + right) / 2);
  while (mid !== left && mid !== right) {
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid;
      mid = parseInt((left + right) / 2);
    }

    if (nums[mid] > target) {
      right = mid;
      mid = parseInt((left + right) / 2);
    }
  }
  
  if(target <= nums[left]) {
    return left;
  } 
  if(target > nums[right]) {
    return right + 1;
  }
  if( target == nums[right]) {
    return right;
  }
  if(target > nums[left] && target < nums[right]) {
    return right;
  }
};

searchInsert([1, 3], 2);
