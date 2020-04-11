/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 只有一个元素
  if(nums[0] === target) {
      return 0
  }
  let left = 0;
  let right = nums.length - 1;
  let point = findPoint(left, right, nums)
  // 在旋转点左侧查找
  let leftRes = binarySearch(0, point, nums, target)
  // 在旋转点右侧查找
  let rightRes = binarySearch(point + 1, nums.length - 1, nums, target)
  return leftRes === -1 ? rightRes : leftRes
};

function binarySearch(left, right, nums, target) {
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function findPoint(left, right, nums) {
    if(nums[left] < nums[right]) {
        return 0
    }
    let mid

    while(left <= right) {
        mid = Math.floor((left + right)/2)
        if(nums[mid] > nums[mid + 1]) {
            return mid
        } else {
            // 在右坡
            if(nums[mid] < nums[left] ) {
                right = mid - 1
            } else {
                // 在左坡
                left = mid + 1
            }
        }
    }
    return 0
}

search([4,5,6,7,0,1,2], 0);
