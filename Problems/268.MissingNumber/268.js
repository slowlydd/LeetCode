/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let sum2 = 0;
    for(let i = 0; i < nums.length; i++) {
      sum = sum + i + 1;
      sum2 = sum2 + nums[i];
    }
    return sum - sum2;
};

missingNumber([9,6,4,2,3,5,7,8,1]);