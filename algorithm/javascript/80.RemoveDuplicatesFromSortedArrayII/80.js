/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length > 0) {
    let length = 1;
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] == nums[i - 1]) {
        count++;
        if(count <= 2) {
          nums[length++] = nums[i]; 
        }
      } else {
        nums[length++] = nums[i]; 
        count = 1;
      }
    }
    return length;
  } else {
    return 0;
  }
};