/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n !== 0) {
    if (m === 0) {
      for (let i = 0; i < n; i++) {
        nums1[i] = nums2[i];
      }
    }

    let i = m - 1;
    let j = n - 1;
    let last = m + n - 1;
    while (j >= 0) {
      if (nums1[i] >= nums2[j]) {
        nums1[last--] = nums1[i];
        i--;
      } else {
        nums1[last--] = nums2[j];
        j--;
      }
    }
  }
};

merge([2,5,6], 3, [], 0);