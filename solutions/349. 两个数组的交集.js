/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 两个集合
var intersection = function(nums1, nums2) {
    let map = new Map()
    for(let i = 0; i < nums1.length; i++) {
        if(!map.has(nums1[i])) {
            map.set(nums1[i], true)
        }
    }
    let set = new Set()
    for(let i = 0; i < nums2.length; i++) {
        if(map.has(nums2[i])) {
            set.add(nums2[i])
        }
    }
    return Array.from(set)
};

// 排序加双指针
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let l1 = nums1.length, l2 = nums2.length, i = 0, j = 0
    let res = [], pre = -1
    while(i < l1 && j < l2) {
        // 如果两个值相等
        if(nums1[i] === nums2[j]) {
            let len = res.length
            if(len) {
                if(res[len - 1] !== nums1[i]) { // 去重
                    res.push(nums1[i])
                }
            } else {
                res.push(nums1[i])
            }
            i++
            j++
        } else if(nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return res
};