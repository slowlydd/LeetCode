/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  for(let i = 0; i < nums.length; i++) {
    if(!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }  
  for(let key in obj) {
    if(obj[key] > nums.length / 2) {
      return Number(key);
    }
  }
};

majorityElement([3]);