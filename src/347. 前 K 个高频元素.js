/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            let temp = map.get(nums[i])
            map.set(nums[i], temp + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    let arr = []
    for(let [key, value] of map.entries()) {
        if(arr[value]) {
            arr[value].push(key)
        } else {
            arr[value] = [key]
        }
    }
    const res = []
    let i = 0, j = arr.length - 1
    while(i < k) {
        if(arr[j]) {
            let tempLen = arr[j].length
            let n = 0
            while(n < tempLen) {
                res.push(arr[j][n]) 
                i++
                n++
            }
        }
        j--
    }
    return res
};