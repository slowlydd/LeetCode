/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0, w = 0, b = 0
    for(let i = 0; i < nums.length; i++) {
        // 第一种情况
        if(nums[i] === 0) {
            // 改变前边的颜色
            nums[ r++] = 0
            if(w > 0) {
                nums[r + w - 1] = 1
                w++
            }

            if(b > 0) {
                nums[r + w + b - 1] = 2
            }
        }

        if(nums[i] === 1) {
            w++
            nums[r + w - 1] = 1
            if(b > 0) {
                nums[r + w + b - 1] = 2
            }
        }

        if(nums[i] === 2) {
            b++
        }
    }
};


sortColors([2,0,2,1,1,0])