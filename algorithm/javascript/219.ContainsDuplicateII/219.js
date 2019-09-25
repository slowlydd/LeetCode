/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//  超时
// var containsNearbyDuplicate = function (nums, k) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j <= k; j++) {
//       if (nums[i] === nums[i + j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };


var containsNearbyDuplicate = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if(obj[nums[i]]) {
      if(i - obj[nums[i]] + 1 <= k) {
        return true;
      } else {
        obj[nums[i]] = i + 1;
      }
    } else {
      obj[nums[i]] = i + 1;
    }
  }
  return false;
};

containsNearbyDuplicate([1,2,3,1,2,3],2);