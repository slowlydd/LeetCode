/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let position = nums[0];
  let nextP = 0;
  let jumpCount = 1;
  let end = nums.length - 1;
  if (nums.length === 1) {
    return 0;
  } else if (nums[0] >= end) {
    return 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i <= position) {
      if (nextP < nums[i] + i) {
        nextP = nums[i] + i;
        if (nextP >= end) {
          return jumpCount + 1;
        }
      }
      if (i === position) {
        position = nextP;
        jumpCount++;
      }
    } else {
      return 0;
    }
  }
};
