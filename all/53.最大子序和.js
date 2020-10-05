/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  /****** 动态规划 ******/
  let res = nums[0]
  for(let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i])
    if(nums[i] > res) res = nums[i]
  }
  return res


  /****** 分治法 ******/
  /**
   * 1.考虑中间元素nums[m]，跨越左右两部分，这里从中间元素开始，往左求出后缀最大，往右
   * 求出前缀最大，保持连续性
   * 2.不考虑中间元素，最大序列和出现在左半部分，递归求解左边部分最大子序列和
   * 3.不考虑中间元素，最大序列和出现在右半部分，递归求解右边部分最大子序列和
   */
  // function helper(list, m, n) {
  //   if(m === n) return list[m]
  //   let sum = 0
  //   let lmax = Number.MIN_SAFE_INTEGER
  //   let rmax = Number.MIN_SAFE_INTEGER
  //   const mid = ((n-m)>>1) + m
  //   const l = helper(list, m, mid)
  //   const r = helper(list, mid + 1, n)
  //   for(let i = mid; i >= m; i--) {
  //     sum += list[i]
  //     if(sum > lmax) lmax = sum
  //   }

  //   sum = 0

  //   for(let i = mid + 1; i <= n; i++) {
  //     sum += list[i]
  //     if(sum > rmax) rmax = sum
  //   }

  //   return Math.max(l, r, lmax + rmax)
  // }

  // return helper(nums, 0, nums.length - 1)

  /******* 优化前缀和 ******/
  // let max = nums[0], min = sum = 0
  // for(let i = 0; i < nums.length; i++) {
  //   sum += nums[i]
  //   max = Math.max(max, sum - min)
  //   min = Math.min(min, sum) 
  // }
  // return max

  /******* 前缀和 + 暴力 *******/
  // 求前缀和
  // let len = nums.length
  // let maxSum = Number.MIN_SAFE_INTEGER
  // let sum = 0
  // for(let i = 0; i < len; i++) {
  //   sum = 0
  //   for(let j = i; j < len; j++) {
  //     sum += nums[j] // 存在大量重复计算
  //     maxSum = Math.max(maxSum, sum)
  //   }
  // }
  // return maxSum

  /************三重循环，暴力求解*****************/
  // let res = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i; j < nums.length; j++) {
  //     let sum = 0;
  //     for (let k = i; k <= j; k++) {
  //       sum += nums[k];
  //     }
  //     if (sum > res) {
  //       res = sum;
  //     }
  //   }
  // }
  // return res
};
// @lc code=end
