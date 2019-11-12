/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = nums[i];
  }

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    // 如果这个元素不是某一类的元素，那么它必是一个开头
    if (hash[nums[i] - 1] == undefined) {
      let currentNum = nums[i];
      let currentStreak = 1;
      while (hash[currentNum + 1] !== undefined) {
        currentNum++;
        currentStreak++;
      }
      longest = Math.max(longest, currentStreak);
    }
  }
  return longest;
};
