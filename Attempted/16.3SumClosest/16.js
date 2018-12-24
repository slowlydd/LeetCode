/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let l = 0;
  let r = nums.length - 1;
  let d = Number.MAX_SAFE_INTEGER;
  let mid = r - 1;
  let temp = 0;
  let res = 0;
  while (l + 1 < r) {
    while (mid !== l) {
      temp = nums[l] + nums[r] + nums[mid] - target;
      if (d > Math.abs(temp)) {
        d = Math.abs(temp);
        res = temp + target;
      }
      if (temp > 0) {
        mid--;
      }
    }
    if(temp > 0) {
      r--;
    } else {
      l++;
    }
  }
  return res;
};

threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
// threeSumClosest([0, 0, 0], 1);
// threeSumClosest([0,2,1,-3], 1);