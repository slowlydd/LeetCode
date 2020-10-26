/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快排统计法
var smallerNumbersThanCurrent = function(nums) {
  const n = nums.length
  const data = new Array(n).fill(0).map(v => new Array(2).fill(0))
  for(let i = 0; i < n; i++) {
    data[i][0] = nums[i]
    data[i][1] = i
  }

  data.sort((a, b) => a[0] - b[0])
  const ret = new Array(n)
  let prev = -1
  for(let i = 0; i < n; i++) {
    if(prev === - 1 || data[i][0] !== data[i - 1][0]) { // 不等的时候更新 计数数量
      prev = i;
    }
    ret[data[i][1]] = prev
  }
  return ret
};

// 计数排序 解法太巧妙，很多
var smallerNumbersThanCurrent = function(nums) {
  let arr = new Array(101).fill(0)
  for(let i = 0 ; i < nums.length; i++) {
    arr[nums[i]]++
  }

  // 计算每个数字前边有多少个数字，计算的数字刚好是按照数字序排列的
  for(let i = 1; i <= 100; i++) {
    arr[i] += arr[i - 1] // 计算小于自己的数字的个数
  }

  let ret = []
  for(let i = 0; i < nums.length; i++) {
    ret.push(nums[i] ?  arr[nums[i] - 1] : 0) // 当 nums[i] = 0 的时候，避免数组越界
  }
  return ret
}