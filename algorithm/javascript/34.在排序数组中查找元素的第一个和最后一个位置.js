/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid 
    let result = []
    // 第一次找到一个值
    let firstSearch = search(left, right, nums, target)
    if(firstSearch === false) {
        // 没有找到值
        return [-1, -1]
    } else {    
        // 尽可能向右找
        let resRight = search(firstSearch, right, nums, target, firstSearch - 1)
        // 尽可能向左找
        let resLeft = search(left, firstSearch - 2, nums, target, firstSearch - 1)
        return [resLeft -1, resRight - 1]
    }
};

function search(left, right, nums, target, preResult) {
    let mid
    while(left <= right) {
        mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            if(preResult < mid) {
                return search(mid + 1, right, nums, target, mid)
            } else {
                return search(left, mid - 1, nums, target, mid)
            }
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return preResult + 1 || false
}

searchRange([1,1,1,1,1,1,2,3,4,4,5,5,5,6,7,8,8,8,8], 8)