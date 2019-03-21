/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.38%)
 * Total Accepted:    390.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length >= nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let len1 = nums1.length;
  let len2 = nums2.length;
  // 两个数组都不为空，数组元素内容交叉
  let len = len1 + len2;
  let left = 0;
  let right = len1;
  while (left <= right) {
    let midS1 = Math.floor((left + right) / 2);
    let midS2 = Math.ceil((len) / 2) - midS1;
    if (midS1 < right && nums2[midS2 - 1] > nums1[midS1]) {
      left = midS1 + 1;
    } else if (midS1 > left && nums1[midS1 - 1] > nums2[midS2]) {
      right = midS1 - 1;
    } else {
      let maxLeft = 0;
      if (midS1 === 0) {
        maxLeft = nums2[midS2 - 1];
      } else if (midS2 === 0) {
        maxLeft = nums1[midS1 - 1]
      } else {
        maxLeft = Math.max(nums1[midS1 - 1], nums2[midS2 - 1]);
      }

      if ((len1 + len2) % 2 === 1) {
        return maxLeft;
      }

      let minRight = 0;

      if (midS1 === len1) {
        minRight = nums2[midS2];
      } else if (midS2 === len2) {
        minRight = nums1[midS1];
      } else {
        minRight = Math.min(nums1[midS1], nums2[midS2]);
      }
      return (minRight + maxLeft) / 2;
    }
  }
};
