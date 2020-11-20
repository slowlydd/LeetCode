/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [];
  if (!nums && nums.length < 4) return res;
  let length = nums.length
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 3; i++) {
    // 遇到重复的元素计算后一个，并且保证第一次被计算到
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 如果最小的值就比 target 大，那么不存在相等的
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

    // 如果 i 的轮次最大的值比 target 小，进入下一轮
    if (
      nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] <
      target
    )
      continue;

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // 如果最小的值就比 target 大，那么不存在相等的
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      // 如果 i, j 的轮次最大的值比 target 小，进入下一轮
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target)
        continue;
      let left = j + 1, right = length - 1
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          // 去重
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++; // 移动指针
          // 去重
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--; // 移动指针
        } else if(sum < target) { // 根据结果移动左右指针
            left++
        } else {
            right--
        }
      }
    }
  }
  return res
};
